const consultarPokemon = (id,number) => 
{                                                    //Se utiliza promesas (.then) o .catch para obtener los datos
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    .then(response =>{
        console.log(response)
        return response.json();
    })
    
    .then(data =>{
        console.log(data);
        pintarPokemon(data, number);
    })

    .catch(error => {
        console.log(error);
    });
}



const btnSeleccionar = () => 
{
    //Declaracion de varible let, const, var
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
}

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);//Pinta el cuadro qe se le indique con #pok-1 o #pok-2
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);//Permite agregar clases variable.getElememtById("#..")
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1