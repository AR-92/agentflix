export async function load({fetch, params }) {
    const res = await fetch(`/api/your?id=${params.slug}`);
    const data = await res.json();
    return data[0];
}