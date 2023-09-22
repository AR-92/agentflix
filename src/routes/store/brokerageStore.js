import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function createBrokerageStore() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    get: () => update(async (n) => {
      const { data, error } = await supabase
        .from('brokerage')
        .select('*');
      set(data)
    }),
    add: (name, address) => update(async (bro) => {
      let { data, error } = await supabase
        .from('brokerage')
        .insert([
          { name: name, address: address },
        ])
        .select()
    })
  };
}

export const brokerageData = createBrokerageStore();
