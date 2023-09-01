import { supabase } from '$lib/supabaseClient';

async function getuserfun(){
    const { data: { user } } = await supabase.auth.getUser()
    return user
} 

async function checkProfile(currentuser){
    let { data: profile, error } = await supabase
    .from('profile')
    .select("*")
    .eq('profiles_id', currentuser);
    return profile;
}

export const getuser=getuserfun
export const profile=checkProfile