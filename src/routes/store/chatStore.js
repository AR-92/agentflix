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
            // console.log("chat heads", data, error)
        }),
        getMyMsg: (head) => update(async (n) => {
            let { data: chat, error } = await supabase
            .from('chat')
            .select('*')
            .eq('head', head);
            console.log("chat msges", chat, error);
            // set(chat)
        }),
        addMsg: (o) => update(async (n) => {
            const { data, error } = await supabase
                .from('chat')
                .upsert(o)
                .select();
            // if (!error) {}
            console.log("addMsg", data, error)
        }),
    }
}

export const chatdata = chat();