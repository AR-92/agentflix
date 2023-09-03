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
    throw error; 
  }
}

function createLanguagesStore() {
  const { subscribe, set } = writable([]);
  getLanguagesData().then(data => set(data));
  return {
    subscribe,
  };
}

export const languagesData = createLanguagesStore();
