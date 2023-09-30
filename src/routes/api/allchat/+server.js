import { supabase } from '$lib/supabaseClient';

async function getdata(id) {
    const { data: conversation, error } = await supabase
        .from('conversation')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('sender', id);
    if (error) console.log(error)
    return conversation
}
export async function GET({ url }) {
    const data = await getdata(url.searchParams.get('id'));
    return new Response(JSON.stringify(data))
}


