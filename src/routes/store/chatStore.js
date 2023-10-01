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
        }),
        getMyMsg: (head) => update(async (n) => {
            await supabase
                .from('chat')
                .select('*')
                .eq('head', head);
        }),
        addMsg: (o) => update(async (n) => {
            await supabase
                .from('chat')
                .upsert(o)
                .select();
        }),
    }
}

export const chatdata = chat();