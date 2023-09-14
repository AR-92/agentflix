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
                // console.log(profile, 'profile data')
                set(profile[0])
                return profile[0]
            }else{
                return null
            }
        }),
        getLocation: (id) => update(async (n) => {
            let { data: locations, error } = await supabase
                .from('locations')
                .select('location')
                .eq('location_id', id);
                // console.log(locations,error,"lo",id)
            return locations
        }),
        getbrokerage: (id) => update(async (n) => {
            let { data: brokerage, error } = await supabase
                .from('brokerage')
                .select('*')
                .eq('id', id);
            return brokerage
        }),
        getlanguage: (id) => update(async (n) => {
            let { data: languages, error } = await supabase
                .from('languages')
                .select('*')
                .eq('id', id);
            if (languages) {
                return languages[0];
            } else {
                return '';
            }
        }),
    }
}

export const profiledata = profile();


