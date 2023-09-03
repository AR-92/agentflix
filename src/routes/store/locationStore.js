import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
// import { goto } from '$app/navigation';

async function get() {
    let { data: locations, error } = await supabase
    .from('locations')
    .select('*')
    // console.log('locations',locations)
    return locations;
}
function locations() {
    const { subscribe } = writable(get());

    return {
        subscribe,
    }

}

export const locationsData = locations();


