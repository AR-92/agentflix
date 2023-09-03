import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function get() {
    let { data: locations, error } = await supabase
        .from('locations')
        .select('*')
    return locations;
}
function locations() {
    const { subscribe, set } = writable([]);
    get().then(data => set(data));
    return {
        subscribe,
    }
}

export const locationsData = locations();


