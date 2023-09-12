// export const ssr = true
import { supabase } from '$lib/supabaseClient';
// import { locationsData } from '../../store/locationStore';
// import { languagesData } from '../../store/languageStore';
// import { brokerageData } from '../../store/brokerageStore';
// import { userdata } from '../../store/userStore';

export async function load({ params }) {
    let { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('profiles_id', params.slug);
    if (profile) {
        // profile[0].userRole = $userdata.role;
        return {
            profile: profile[0],
        };
    }
}