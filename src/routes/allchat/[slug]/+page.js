export async function load({ fetch, params }) {
        const res = await fetch(`/api/allchat?id=${params.slug}`);
        const data = await res.json();
        console.log(data,'data from chat server')
        return {data:data};
}