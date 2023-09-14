import { supabase } from '$lib/supabaseClient';
// import { json } from '@sveltejs/kit';
async function getdata(id) {
    const { data, error } = await supabase
        .from('profile')
        .insert([{
            name: 'Your Display Name',
            auth_id: id,
            about: 'Add your about info',
            hobbies: 'Add,your,hobbies',
            service_areas: 'Add,your,service,areas',
            oa: 'Add overview',
            education: 'Add education',
            new: true,
            role: true,
        }])
        .select();

    if (error) console.log(error);
    return data
}
export async function GET({ url }) {
    const data = await getdata(url.searchParams.get('id'));
    return new Response(JSON.stringify(data))
}
// export async function POST({ request }) {
// 	const { data } = await request.json();
//     console.log(data,request,'setup data')
// 	return json(data);
// }

