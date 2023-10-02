import { useCallback, useState, useEffect } from "react";
import constate from "constate";

import useBeacon, { loadFromTzktBigmap } from "./useBeacon";

const fetchPrices = async () => {
  const response = await fetch("https://temple-api-mainnet.prod.templewallet.com/api/exchange-rates");

  return await response.json();
};

export const [UseRewardsProvider, useRewards] = constate(() => {
  const { storage } = useBeacon();
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState(null);

  const loadRewards = useCallback(async () => {
    if (!storage || !storage.vestings_counter) {
      setLoading(true);
      return;
    }
    const limit = storage.vestings_counter;
    const newRewards = await loadFromTzktBigmap(storage.vestings.id.toNumber(), limit);
    const arr = newRewards.map((_, index) => ({ ..._.value, id: index }))

    setRewards(arr);
    setLoading(false);
  }, [storage]);



  const loadPrices = useCallback(async () => {
    const rawPrices = await fetchPrices();

    const prices = Object.fromEntries(rawPrices.reduce((acc, { tokenAddress, exchangeRate }) => acc.concat([[tokenAddress, exchangeRate]]), []));

    setPrices(prices);
  }, []);

  useEffect(() => {
    loadPrices();
  }, [loadPrices]);  

  useEffect(() => {
    loadRewards();
  }, [loadRewards]);

  return {
    rewards,
    loadingRewards: loading,
    loadRewards,
    prices
  };
});
