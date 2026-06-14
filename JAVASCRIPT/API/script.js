const URL="https://catfact.ninja/fact";
let factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts = async () =>{
    // get request
    let response= await   fetch(URL); 


    // converting JSON format output of fetch API into JS object
    let data = await response.json();
    factPara.innerText=data.fact;
}
btn.addEventListener("click",getFacts);
