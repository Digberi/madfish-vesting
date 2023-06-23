import BigNumber from "bignumber.js";

const tenIn18 = new BigNumber(10).pow(18);

export const prepareTokenRowData = (tokens, index, reward) => {
  const token =
    tokens.length > 0
      ? {
        symbol: tokens[index]?.symbol,
        decimals: tokens[index]?.decimals,
      }
      : { symbol: "Loading", decimals: 6 };
  const tokenName = token.symbol.substring(0, 7) + "...";
  const tenInDecimals = new BigNumber(10).pow(token.decimals)
  const treasury = new BigNumber(reward.treasury)
  const speed = new BigNumber(reward.distr_speed_f)
  const rewardAmount = new BigNumber(reward.collected)
  const fullReward = treasury.div(
    tenInDecimals
  );
  const collected = rewardAmount.div(
    tenInDecimals
  );

  const dt = treasury.times(tenIn18.times(1000)).div(speed)

  const t0 = new Date(reward.deadline).getTime() - dt.toNumber();

  const daysLeft = Date.now() < new Date(reward.deadline).getTime() ? (new Date(reward.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24) : 0;

  const left = Date.now() < new Date(reward.deadline).getTime() ? treasury.times((Date.now() - t0) / dt).minus(rewardAmount).div(tenInDecimals) : new BigNumber(-1)
  const leftLabel = left.lt(0) ? 'All collected' : left.gt(fullReward.minus(collected)) ? `${fullReward.minus(collected).toFixed(1)} ${tokenName}` : `${left.toFixed(1)} ${tokenName}`

  return {
    tokenName,
    fullReward,
    collected,
    left,
    leftLabel,
    daysLeft,
  }
}