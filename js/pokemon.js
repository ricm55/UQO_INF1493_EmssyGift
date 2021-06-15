console.log('Here the charizards card!!!!');

const cardsElement = document.querySelector('#pokemonCards');
var search = document.querySelector('.search');

//Obtenir les cartes charizards
const apiUrl =  "https://api.pokemontcg.io/v1/cards?name=charizard";

//Afficher dans la page les cartes charizards
async function getCharizardCards(){
    var allNameCards = [];

    //Demander a l'API les cartes charizards
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
    
    //Créer un élément dans la page pour chaque carte obtenu
    json.cards.forEach((card) => {
        const image = document.createElement('img');
        image.src = card.imageUrl;
        image.className = card.name;
        cardsElement.append(image);

        if(!allNameCards.includes(card.name)){
            allNameCards.push(card.name);
        }
    });

    //Créer une list a option afin de pouvoir aller chercher la carte de son choix
    var select = document.createElement('select');
    select.addEventListener("change",displaySelectedCard);

    var option = document.createElement("option");
    option.text = "All";
    select.add(option);
    allNameCards.forEach((name)=>{
        var option = document.createElement("option");
        option.text = name;
        select.add(option);
    });
    search.append(select);
}


//select cards
function displaySelectedCard(){
    var input = document.querySelector('select').value;
    var cards = document.querySelector('#pokemonCards');
    var imgs = cards.querySelectorAll('img');
    imgs.forEach((img)=>{
        console.log(img.className);
        
        if(img.className == input ||input == "All"){
            img.style.display = 'block';
        }else{
            img.style.display = 'none';
        }
    })
}

getCharizardCards();