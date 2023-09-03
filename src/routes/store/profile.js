import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
import { page } from '$app/stores';

// import { goto } from '$app/navigation';


function profile() {
    const { subscribe } = writable(get());

    return {
        subscribe,
    }

}

export const profileData = profile();


