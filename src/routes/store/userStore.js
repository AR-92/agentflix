import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
// import { getToastStore } from '@skeletonlabs/skeleton';

// const toast=derived(toastStore,($getToastStore)=>toastStore=$getToastStore)
// let toastStore =toast;
async function check() {
    const { data: { user } } = await supabase.auth.getUser()
    return user !== null;
}
function user() {
    const { subscribe, set, update } = writable(false);
    check().then((n) => {
        set(!n);
    })
    return {
        subscribe,
        sigup: (email, password, toast) => update(async (n) => {
            let { data, error } = await supabase.auth.signUp({
            	email: email,
            	password: password
            });
            if(!error){
                goto('./your');
                const t = {
                    message: 'Welcome to Agentflix ' + email,
                    timeout: 10000
                };
                toast.trigger(t);
            }else{
                const t = {
                    message: 'Sorry your are unable to Join',
                    timeout: 10000
                };
                toast.trigger(t);
            }

        }),
        login: (email, password, toast) => update(async (n) => {
            // console.log(email,password,n)
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            if (!error) {
                const t = {
                    message: 'Welcome to Agentflix ' + email,
                    timeout: 10000
                };
                toast.trigger(t);
                set(false)
                goto('./your');
            } else {
                const f = {
                    message: 'Your email or password is not valid ',
                    timeout: 10000
                };
                toast.trigger(f);
            }

        }),
        logout: () => update(async (n) => {
            let { error } = await supabase.auth.signOut();
            if (!error) {
                goto('./');
            }
        }),

    }

}

export const userdata = user();


