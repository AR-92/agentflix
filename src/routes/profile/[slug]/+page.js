export async function load({ fetch, params }) {
    const res = await fetch(`/api/profile?id=${params.slug}`);
    const data = await res.json();
    // data.then(x=>{return data[0];} )
    // if(data){
    return data[0];
    // }else{
    //     return data;
    // }
}