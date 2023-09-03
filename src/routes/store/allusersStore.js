import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function get() {

    let { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('role','True')

    // console.log('locations',locations)
    return profile;
}
function profile() {
    const { subscribe } = writable(get());

    return {
        subscribe,
    }

}

export const profilesData = profile();


