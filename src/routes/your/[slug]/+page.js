export async function load({fetch, params }) {
    const res = await fetch(`/api/your?id=${params.slug}`);
    const data = await res.json();
        if(data.length>=1){
        return data[0];
    }else{
        return null;
    }
}