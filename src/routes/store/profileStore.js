import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function profile() {
    const { subscribe, set, update } = writable({});
    return {
        subscribe,
        get: (authid) => update(async (n) => {
            const { data: profile, error } = await supabase
            .from('profile')
            .select('*')
            .eq('auth_id', authid);
            if (!error) {
                console.log(profile,'profile data')
                set(profile[0])
            } 
        }),
    }
}

export const profiledata = profile();


