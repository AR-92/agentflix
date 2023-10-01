export async function load({ fetch, params }) {
        var p=params.slug.split("@")
        const res = await fetch(`/api/allchat?id=${p[0]}&role=${p[1]}`);
        const data = await res.json();
        console.log(data,'data from chat server')
        return {data:data};
}