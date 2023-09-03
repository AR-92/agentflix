import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
// import { goto } from '$app/navigation';

async function get() {
    let { data: languages, error } = await supabase
    .from('languages')
    .select('*')
    // console.log('locations',locations)
    return languages;
}
var l= await get();
function languages() {
    const { subscribe } = writable(l);

    return {
        subscribe,
    }

}

export const languagesData = languages();


