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
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    get: () => update(async (n) => {
      const { data, error } = await supabase
        .from('languages')
        .select('*');
      set(data)
    }),
  };
}

export const languagesData = createLanguagesStore();
