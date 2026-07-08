const client=require('./client');
async function init(){
    const name=await client.get('name');
    console.log(name);
    

}
// dont forgate to call the async function
init();
