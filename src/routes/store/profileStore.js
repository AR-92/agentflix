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
                // //console.log(profile, 'profile data')
                set(profile[0])
                return profile[0]
            } else {
                return null
            }
        }),
        getLocation: (id) => update(async (n) => {
            let { data: locations, error } = await supabase
                .from('locations')
                .select('location')
                .eq('location_id', id);
            // //console.log(locations,error,"lo",id)
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
        updatepayed: (email) => update(async (n) => {
            await supabase
                .from('profile')
                .update({
                  new:false,
                })
                .eq('email', email)
                .select();
        }),
        updaterole: (role, id) => update(async (n) => {
            let { data, error } = await supabase
                .from('profile')
                .update({
                    role: role,
                    new: false
                })
                .eq('profiles_id', id)
                .select();

            //console.log(data, error)
        }),
        getChatHead: async (id,user) => {
            const { data: conversation, error } = await supabase
                .from('conversation')
                .select('*')
                .eq('receiver', id);
            if (!error) {
                if(conversation.length>0){
                    return conversation[0]
                }else{
                    const { cdata: conversation, error } = await supabase
                    .from('conversation')
                    .insert([{
                        receiver:id,
                        sender:user
                    }])
                    .select();
                    return  conversation
                }
            }else{
                return error
            }
        }
    }
}

export const profiledata = profile();


