import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

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
                console.log('error from the signup ', error)
                const t = {
                    message: 'Sorry your are unable to Join ' + error,
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
                    message: 'Your email or password is not valid '+ error,
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
                    message: 'Email is sent to ' + email+'. Login from there !',
                    timeout: 10000
                };
                toast.trigger(t);
                set(false)
                // goto('./your');
            } else {
                console.log('error from login ', error)
                const f = {
                    message: 'Your email is not valid '+ error,
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
                // goto('./your');
            } else {
                console.log('error from login ', error)
                const f = {
                    message: 'Your email is not valid '+ error,
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
        // getuser:()=> 
    }

}

export const userdata = user();


