import { supabase } from '$lib/supabaseClient';

async function getdata(id, role) {
    if (role === 'false') {
        const { data: conversation, error } = await supabase
            .from('conversation')
            .select('*')
            .order('created_at', { ascending: false })
            .eq('sender', id);
        if (error) console.log(error)
        return conversation
    }
    if (role === 'true') {
        const { data: conversation, error } = await supabase
            .from('conversation')
            .select('*')
            .order('created_at', { ascending: false })
            .eq('receiver', id);
        if (error) console.log(error)
        return conversation
    }

}
export async function GET({ url }) {
    const data = await getdata(url.searchParams.get('id'), url.searchParams.get('role'));
    return new Response(JSON.stringify(data))
}


