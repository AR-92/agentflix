import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function createBrokerageStore() {
  const { subscribe, set ,update} = writable([]);
  return {
    subscribe,
    get: () => update(async (n) => {
      const { data, error } = await supabase
      .from('brokerage')
      .select('*');
      set(data)
    })
  };
}

export const brokerageData = createBrokerageStore();
