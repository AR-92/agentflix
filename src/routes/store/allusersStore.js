import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

async function get() {

    const { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('role', 'True')

    // //console.log('locations',locations)
    return profile;
}
async function search(value) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .ilike('name', value)
        // .or([
        //     { name: { ilike: value } },
        //     { column2: { ilike: value } },
        //     { column3: { ilike: value } },
        //     // Add more columns as needed
        //   ]);
    //console.log(profile)
    return profile
}
async function city(value) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .eq('location_id', value)
    //console.log(profile)
    return profile
}
async function filter(brokerage,rating,location,languages,experience) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select("*")
        .eq('location_id', location)
        .eq('language', languages)
        .eq('brokerage_id', brokerage)
        .gt('rating', rating)
        .gt('experience', experience)
    //console.log(profile)
    return profile
}

var d = await get()
function profile() {
    // let d= await get()

    const { subscribe, set, update } = writable(d);

    return {
        subscribe,
        searchFilter: (value) => update(async (n) => {
            set(await search(value))
        }),
        cityFilter: (value) => update(async (n) => {
            set(await city(value))
        }),
        filter: (brokerage,rating,location,languages,experience) => update(async (n) => {
            set(await filter(brokerage,rating,location,languages,experience))
        }),
        // getall:() => update(async (n) => {
        //     set(await gat())
        // }),
        all: () => update(async (n) => {
            set(await get())
        }),
        // getall:() => update(async (n) => {
        //     set(await gat())
        // }),

    }
}

export const profilesData = profile();


