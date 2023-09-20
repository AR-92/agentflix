import { supabase } from '$lib/supabaseClient';

async function getdata(id) {
    const { data: profile, error } = await supabase
        .from('profile')
        .select('profiles_id,auth_id,role,oa,avatar, name, rating, contact, username, dob, about, hobbies, education, experience, location_id(location), brokerage_id(name,adress),service_areas, language(language),email')
        .eq('profiles_id', id);
    if (error) console.log(error)
    return profile
}
export async function GET({ url }) {
    const data = await getdata(url.searchParams.get('id'));
    return new Response(JSON.stringify(data))
}


