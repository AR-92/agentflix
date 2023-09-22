import { supabase } from '$lib/supabaseClient';
// import { json } from '@sveltejs/kit';
async function getdata(id,email) {
    const { data, error } = await supabase
        .from('profile')
        .insert([{
            name: 'Your Display Name',
            auth_id: id,
            email:email,
            about: 'Add your about info',
            hobbies: 'Add,your,hobbies',
            service_areas: 'Add,your,service,areas',
            oa: 'Add overview',
            education: 'Add education',
            new: true,
            role: true,
            rating:'0',
            brokerage_id:'30f9e8db-3230-48e0-b4da-bcf1734fef8b',
            language:'431ecce7-ddd7-4741-a3de-a8e8c1b0290e',
            experience:'0',
            location_id:'1a61ad53-f547-4c1c-ae9f-03ca321ca7f7'
        }])
        .select();

    if (error) console.log(error);
    return data
}
export async function GET({ url }) {
    const data = await getdata(url.searchParams.get('id'),url.searchParams.get('email'));
    return new Response(JSON.stringify(data))
}
// export async function POST({ request }) {
// 	const { data } = await request.json();
//     console.log(data,request,'setup data')
// 	return json(data);
// }

