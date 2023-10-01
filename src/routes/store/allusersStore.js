import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function get() {
    const { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('role', 'True')
        .eq('new', 'False');
    return profile;
}
async function search(value) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .ilike('name', value)
        .eq('role', 'True')

    return profile
}
async function city(value) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .eq('location_id', value)
        .eq('role', 'True')
    return profile
}
async function filter(brokerage, rating, location, languages, experience) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .eq('location_id', location)
        .eq('language', languages)
        .eq('brokerage_id', brokerage)
        .gt('rating', rating-1)
        .gt('experience', experience-1)
        .eq('role', 'True')
    return profile
}

function profile() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        searchFilter: (value) => update(async (n) => {
            set(await search(value))
        }),
        cityFilter: (value) => update(async (n) => {
            set(await city(value))
        }),
        filter: (brokerage, rating, location, languages, experience) => update(async (n) => {
            set(await filter(brokerage, rating, location, languages, experience))
        }),
        all: () => update(async (n) => {
            set(await get());
        }),
        up:(value)=> update(async (n) => {
            set(value)
        }),
    }
}
export const profilesData = profile();


