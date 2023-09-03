import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function getLanguagesData() {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select('*');
    
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching languages data:', error);
    throw error; // Rethrow the error if needed
  }
}

function createLanguagesStore() {
  const { subscribe, set } = writable([]);

  // Fetch data when the store is created
  getLanguagesData().then(data => set(data));

  return {
    subscribe,
  };
}

export const languagesData = createLanguagesStore();
