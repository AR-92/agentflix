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
    throw error; // Rethrow the error if needed
  }
}

function createBrokerageStore() {
  const { subscribe, set } = writable([]);
  
  // Fetch data when the store is created
  getBrokerageData().then(data => set(data));

  return {
    subscribe,
  };
}

export const brokerageData = createBrokerageStore();
