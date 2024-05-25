const content = document.querySelector(".content");
const search = document.querySelector(".search");
const button = document.querySelector(".button");
const results = document.querySelector(".results");
const errordisplay = document.querySelector(".errordisplay");
// results
const pokemonname = document.querySelector(".pokemonname");
const ability = document.querySelector(".ability");
const height = document.querySelector(".height");
let imagedisplay = document.querySelector(".imagedisplay");




button.addEventListener("click", ()=>{
if(search.value){
    pokie();
}
else{
    errordisplay.innerHTML = `please try again`
}
});


// logiccc 


async function pokie(){
    try{
        let finalresult = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    let data = await finalresult.json();
    console.log(data);
    if(data){
        results.style.display = "block";
        results.innerHTML = `<h1 class="pokemnonname"> Name : ${data.name}</h1>
        <h1 class="weight">  Weight : ${data.weight} kg's </h1>
        <h1 class="height"> Height : ${data.height} cm </h1>`
        imagedisplay.style.display = "block"
        imagedisplay.innerHTML= `<img src=${data.sprites.front_default}>`
    }
    
}
catch(error){
    errordisplay.innerHTML = `Enter a valid pokemon name or<br>  dont use Caps `
}

}