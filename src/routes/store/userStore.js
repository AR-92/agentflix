import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

async function check() {
    const { data: { user } } = await supabase.auth.getUser()
    return user;
}
function user() {
    const { subscribe, set, update } = writable(check());
    check().then((n) => {
        set(n);
    })
    return {
        subscribe,
        sigup: (email, password, toast) => update(async (n) => {
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (!error) {
                goto('./your');
                const t = {
                    message: 'Welcome to Agentflix ' + email,
                    timeout: 10000
                };
                toast.trigger(t);
            } else {
                const t = {
                    message: 'Sorry your are unable to Join ' + error,
                    timeout: 10000
                };
                toast.trigger(t);
            }

        }),
        login: (email, password, toast) => update(async (n) => {
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
                set(check())
                goto('./your');
            } else {
                const f = {
                    message: 'Your email or password is not valid ' + error,
                    timeout: 10000
                };
                toast.trigger(f);
            }

        }),
        emailLogin: (email, toast) => update(async (n) => {
            let { data, error } = await supabase.auth.signInWithOtp({
                email: email
            })

            if (!error) {
                const t = {
                    message: 'Email is sent to ' + email + '. Login from there !',
                    timeout: 10000
                };
                toast.trigger(t);
                set(false)
            } else {
                const f = {
                    message: 'Your email is not valid ' + error,
                    timeout: 10000
                };
                toast.trigger(f);
            }

        }),
        forgetPassword: (email, toast) => update(async (n) => {
            let { data, error } = await supabase.auth.resetPasswordForEmail(email)

            if (!error) {
                const t = {
                    message: 'Email is sent to ' + email,
                    timeout: 10000
                };
                toast.trigger(t);
                set(false)
            } else {
                const f = {
                    message: 'Your email is not valid ' + error,
                    timeout: 10000
                };
                toast.trigger(f);
            }

        }),
        logout: (toast) => update(async (n) => {
            let { error } = await supabase.auth.signOut();
            if (!error) {
                goto('./');
                const f = {
                    message: 'You are now logged out !',
                    timeout: 10000
                };
                toast.trigger(f);
            }
        }),
    }

}

export const userdata = user();


