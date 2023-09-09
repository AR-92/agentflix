import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function locations() {
    const { subscribe, set ,update} = writable([]);
    return {
        subscribe,
        get: () => update(async (n) => {
            let { data: locations, error } = await supabase
                .from('locations')
                .select('*')
                set(locations)
        }),
    }
}

export const locationsData = locations();


