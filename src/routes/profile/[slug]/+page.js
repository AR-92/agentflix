import { supabase } from '$lib/supabaseClient';
import { profiledata } from '../../store/profileStore';

 
export async function load({ params }) {
    let { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('profiles_id', params.slug);
    if (profile) {
        let p=profile[0]
        // const results = await Promise.allSettled([profiledata.getLocation(p.location_id),p.brokerage= profiledata.getbrokerage(p.brokerage_id),profiledata.getlanguage(p.language)]);
        // p.location= profiledata.getLocation(p.location_id);
        // p.brokerage= profiledata.getbrokerage(p.brokerage_id);
        // p.languageName= profiledata.getlanguage(p.language);
        // console.log('profile data server >',results,p)
        return {
            profile: profile[0],
        };
    }
}