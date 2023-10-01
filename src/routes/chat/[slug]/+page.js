export async function load({ fetch, params }) {
        const res = await fetch(`/api/chat?id=${params.slug}`);
        const data = await res.json();
        return {data:data};
}