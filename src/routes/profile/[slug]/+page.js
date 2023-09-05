import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
    let { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('profiles_id', params.slug);
    if (profile) {
        return {
            profile: profile[0],
        };
    }
}