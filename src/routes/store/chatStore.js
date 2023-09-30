import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function chat() {
    const { subscribe, set, update } = writable({});
    return {
        subscribe,
        createChatHeads: (sender, receiver, sname, rname) => update(async (n) => {
            const { data, error } = await supabase
                .from('conversation')
                .upsert({ sender, receiver, sname, rname })
                .neq("sender", sender)
                .neq("receiver", receiver)
                .select();
            // if (!error) {}
            console.log("chat heads", data, error)
        })
    }
}

export const chatdata = chat();