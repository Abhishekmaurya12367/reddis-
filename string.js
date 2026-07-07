const client=require('./client');
async function init(){
    const name=await client.get('name');
    console.log(name);
    

}
init();