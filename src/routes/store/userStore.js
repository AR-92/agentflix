import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { profiledata } from './profileStore';

async function check() {
    try {
        // Attempt to get the authenticated user's data
        let { data: { user } } = await supabase.auth.getUser();

        if (user) {
            // If the user is authenticated, fetch their profile data
            profiledata.get(user.id);
        } else {
            // If the user is not authenticated, create a role-less user object
            user = { role: false };
        }

        return user;
    } catch (error) {
        // Handle errors gracefully, e.g., log the error and return a role-less user object
        console.error('Error in check:', error);
        return { role: false };
    }
}

function user() {
    const { subscribe, set, update } = writable({});
    check().then(x => set(x))
    return {
        subscribe,
        google: () => {
            supabase.auth.signInWithOAuth({
                provider: 'google'
            }).then(x=>{
                console.log(x,'googloe auth')
            })
        },
        signup: (email, password, toast, type) => update(async (n) => {
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (!error) {
                // console.log("http://localhost:5173/api/setup?id="+data.user.id+"&email="+data.user.email)
                fetch("http://localhost:5173/api/setup?id=" + data.user.id + "&email=" + data.user.email + "&role=" + type)
                // goto('../your/'+data.user.id);
                const t = {
                    message: 'Welcome to Agentflix ' + email + '. Now Please go to your email and verify your account !',
                    timeout: 5000
                };
                toast.trigger(t);
            } else {
                const t = {
                    message: 'Sorry your are unable to Join ' + error,
                    timeout: 5000
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
                    timeout: 5000
                };
                toast.trigger(t);
                set(data.user);
                fetch("http://localhost:5173/api/setup?id=" + data.user.id)
                profiledata.get(data.user.id)
                goto('../your/' + data.user.id);

            } else {
                const f = {
                    message: 'Your email or password is not valid ' + error,
                    timeout: 5000
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
                    timeout: 5000
                };
                toast.trigger(t);
                set(false)
            } else {
                const f = {
                    message: 'Your email is not valid ' + error,
                    timeout: 5000
                };
                toast.trigger(f);
            }

        }),
        forgetPassword: (email, toast) => update(async (n) => {
            let { data, error } = await supabase.auth.resetPasswordForEmail(email)

            if (!error) {
                const t = {
                    message: 'Email is sent to ' + email,
                    timeout: 5000
                };
                toast.trigger(t);
                // set(false)
            } else {
                const f = {
                    message: 'Your email is not valid ' + error,
                    timeout: 5000
                };
                toast.trigger(f);
            }

        }),
        logout: (toast) => update(async (n) => {
            let { error } = await supabase.auth.signOut();
            if (!error) {
                goto('/');
                const f = {
                    message: 'You are now logged out !',
                    timeout: 5000
                };
                toast.trigger(f);
            }
        }),
        fresh: () => update(async () => { check().then(x => set(x)) })
    }
}

export const userdata = user();


