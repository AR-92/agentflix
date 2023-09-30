export async function load({ fetch, params }) {
    const res = await fetch(`/api/profile?id=${params.slug}`);
    const data = await res.json();
    return data[0];
}