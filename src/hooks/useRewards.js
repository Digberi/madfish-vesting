import { useCallback, useState, useEffect } from "react";
import constate from "constate";

import useBeacon, { loadFromTzktBigmap } from "./useBeacon";

export const [UseRewardsProvider, useRewards] = constate(() => {
  const { storage } = useBeacon();
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRewards = useCallback(async () => {
    if (!storage || !storage.vestings_counter) {
      setLoading(true);
      return;
    }
    const limit = storage.vestings_counter;
    const newRewards = await loadFromTzktBigmap(storage.vestings.id.toNumber(), limit);
    const arr = newRewards.map((_, index) => ({ ..._.value, id: index }))
    console.log('arr', arr);
    setRewards(arr);
    setLoading(false);
  }, [storage]);

  useEffect(() => {
    loadRewards();
  }, [loadRewards]);

  return {
    rewards,
    loadingRewards: loading,
    loadRewards,
  };
});
