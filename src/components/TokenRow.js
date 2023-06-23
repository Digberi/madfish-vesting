import React, { useCallback } from "react";
import useBeacon from "../hooks/useBeacon";
import { Button } from "./Button";
import { prepareTokenRowData } from "../utils/tokenRowHelper";

export const TokenRow = ({ tokens, index, reward }) => {
  const { contract, pkh, Tezos } = useBeacon();

  const handleClaim = useCallback(
    async (id) => {
      if (!contract) return;
      const claimParams = contract.methodsObject.claim(id);
      const batchOp = Tezos.wallet.batch().withContractCall(claimParams);
      await batchOp.send();
    },
    [contract, Tezos.wallet]
  );

  const {
    tokenName,
    fullReward,
    collected,
    left,
    leftLabel,
    daysLeft,
  } = prepareTokenRowData(tokens, index, reward)

  return (
    <tr>
      <td>
        {fullReward.toFixed(1)} {tokenName}
      </td>
      <td>
        {collected.toFixed(1)} {tokenName}
      </td>
      <td>
        {/* {left.toFixed()} */}
        {leftLabel}
      </td>
      <td>
        {daysLeft.toFixed(0)} days
        {/* ({new Date(reward.deadline).toDateString()}) */}
      </td>
      <td>
        {(reward.receiver === pkh || reward.admin === pkh) && (<Button
          disabled={!pkh || left.toFixed(1) === "0.0"}
          onClick={() => handleClaim(reward.id)}
        >
          {reward.admin === pkh ? 'Claim as Admin' : 'Claim'}
        </Button>)}
      </td>
    </tr>
  );
};
