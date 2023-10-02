import React, { useCallback, useEffect, useState, useMemo } from "react";
import useBeacon from "../hooks/useBeacon";
import { getTokensMetadata } from "../utils/tokenMetadata.api";
import { RefreshableButton } from "./RefreshableButton";
import { useRewards } from "../hooks/useRewards";
import { Table } from './Table';
import { Button } from "./Button";
import BigNumber from "bignumber.js";
import { prepareTokenRowData } from "../utils/tokenRowHelper";


const tenIn18 = new BigNumber(10).pow(18);

const checkIfClaimable = (reward) => {
  const tenInDecimals = new BigNumber(10).pow(6)
  const treasury = new BigNumber(reward.treasury)
  const speed = new BigNumber(reward.distr_speed_f)
  const rewardAmount = new BigNumber(reward.collected)


  const dt = treasury.times(tenIn18.times(1000)).div(speed)

  const t0 = new Date(reward.deadline).getTime() - dt.toNumber();


  const left = Date.now() < new Date(reward.deadline).getTime() ? treasury.times((Date.now() - t0) / dt).minus(rewardAmount).div(tenInDecimals) : new BigNumber(-1);

  return left.gt(0.1);
}

export const Explore = () => {
  const { contract, pkh, Tezos } = useBeacon();
  const [tokens, setTokens] = useState([]);
  const { rewards, loadingRewards, loadRewards, prices } = useRewards();

  const loadTokensMetadata = useCallback(async () => {
    if (rewards.length === 0) {
      return;
    }

    let newTokens = [];
    for (const reward of rewards) {
      let token = null;
      if (reward.asset["fa2"]) {
        token = await getTokensMetadata(
          reward.asset.fa2.token,
          reward.asset.fa2.id.toString()
        );
      } else if (reward.asset["fa12"]) {
        token = await getTokensMetadata(reward.asset.fa12, 0);
      } else {
        token = {
          decimals: 6,
          name: "TEZ",
          symbol: "TEZ",
          thumbnailUri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tezos_logo.svg/100px-Tezos_logo.svg.png",
        };
      }

      newTokens.push(token);
    }
    return newTokens;
  }, [rewards]);

  useEffect(() => {
    let mounted = { value: true };
    (async () => {
      const newTokens = await loadTokensMetadata();
      if (mounted.value) {
        setTokens(newTokens);
      }
    })()

    return () => {
      mounted.value = false;
    }
  }, [loadTokensMetadata]);


  const claimAll = useCallback(async () => {
    if (!contract) return;

    const userRewards = rewards.filter(x => x.receiver === pkh)

    const batchOp = userRewards.filter(checkIfClaimable).reduce((acc, reward) => {
      const claimParams = contract.methodsObject.claim(reward.id);
      return acc.withContractCall(claimParams);
    }, Tezos.wallet.batch())

    await batchOp.send();

  }, [Tezos.wallet, contract, pkh, rewards]);


  const isLoading = !tokens || (tokens.length !== 0 && tokens.length !== rewards.length)

  const yourRewards = rewards.filter(x => x.receiver === pkh || x.admin === pkh);


  const usd = useMemo(() => {
    if (!yourRewards.length ||!prices || isLoading) {
      return BigNumber(0);
    }

    return yourRewards.reduce((acc, reward) => {
      const { fullReward, collected, left } = prepareTokenRowData(tokens, reward.id, reward);

      const pending = left.lt(0) ?
        BigNumber(0) :
        left.gt(fullReward.minus(collected))
          ? fullReward.minus(collected)
          : left;

      if (pending.isZero()) return acc;

      const price = prices[reward.asset?.fa12 ?? reward.asset.fa2.token] ?? BigNumber(0);

      return acc.plus(pending.times(price))
    },BigNumber(0))
  },
    [isLoading, yourRewards, tokens, prices]
  );

  if (loadingRewards) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="search-bar"></div>

      <div className="your-rewards">
        <h3 className='pad'>Your rewards: {usd.toFixed(2)} USD </h3>
        <Button disabled={!pkh} onClick={claimAll}>Claim all</Button>
      </div>
      {
        isLoading ? (
          <div>Loading tokens...</div>
        ) : (
          <Table tokens={tokens} rewards={yourRewards} />
        )
      }

      <h3 className='pad'>All rewards:</h3>
      {
        isLoading ? (
          <div>Loading tokens...</div>
        ) : (
          <Table tokens={tokens} rewards={rewards.filter(x => x.receiver !== pkh)} />
        )
      }

      {pkh && (
        <RefreshableButton callback={() => loadRewards()} />
      )}
    </section>
  );
};
