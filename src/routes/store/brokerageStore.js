import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function getBrokerageData() {
  try {
    const { data, error } = await supabase
      .from('brokerage')
      .select('*');
    
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching brokerage data:', error);
    throw error; 
  }
}

function createBrokerageStore() {
  const { subscribe, set ,update} = writable([]);
  return {
    subscribe,
    get: () => update(async (n) => {
      const { data, error } = await supabase
      .from('brokerage')
      .select('*');
      set(data)
    }),
    filter: () => update((n) => {
      console.log('this is siss ',n)
      // return 2
    }),
  };
}

export const brokerageData = createBrokerageStore();
