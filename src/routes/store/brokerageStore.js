import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
// import { goto } from '$app/navigation';

async function get() {
    let { data: brokerage, error } = await supabase
    .from('brokerage')
    .select('*')
    // //console.log('locations',locations)
    return brokerage;
}
var l= await get();
function brokerage() {
    const { subscribe } = writable(l);

    return {
        subscribe,
    }

}

export const brokerageData = brokerage();


