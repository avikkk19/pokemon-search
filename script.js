// const content = document.querySelector(".content");
const search = document.querySelector(".search");
const button = document.querySelector(".button");
const errordisplay = document.querySelector(".errordisplay");
// results
const results = document.querySelector(".results");
const pokemonname = document.querySelector(".pokemonname");
const ability = document.querySelector(".ability");
const height = document.querySelector(".height");
let imagedisplay = document.querySelector(".imagedisplay");




button.addEventListener("click" , () =>{
   if(search.value){
    datafetch();
   }
   else{
    errordisplay.innerHTML = `system down he re baba`
   }
})


// logiccc 


async function datafetch(){
    
   try{
    const ifresults = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
    let data = await  ifresults.json();
    console.log(data)

    if(data){
        results.style.display = `block`
        results.innerHTML = `  <h1 class="pokemonname"> Pokemon name : ${data.name}</h1>
            <h1 class="ability"> ${data.name} experince: ${data.base_experience} Fights </h1>
            <h1 class="weight"> ${data.name}   weight : ${data.weight} Kg's</h1>
            <h1 class="height">${data.name}   height : ${data.height} Feet's</h1>`

            imagedisplay.style.display = `block`
            imagedisplay.innerHTML = ` <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">`
    }
    else{
        errordisplay.innerHTML = `error nigga`
    }
   }
   catch{
    errordisplay.innerHTML = `Enter a valid pokemon name or <br> dont use Caps`
   }
}
