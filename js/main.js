
// if (window.performance.navigation.type == 1) {
//       location.href = '../html/introScreen.html';
// }
var URI = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=90/'
var URI2 = 'https://pokeapi.co/api/v2/pokemon/'

const btnClicked = (numero) => {
      console.log('BOTON '+numero+' presionado')

      btn_1 = document.querySelector('#btn_1')
      btn_1.classList.remove('is-focused')

      switch(numero){
            case 1: createCards(1, 54); break
            case 2: createCards(55, 108); break
            case 3: createCards(109, 162); break
            case 4: createCards(163, 216); break
            case 5: createCards(217, 270); break
            case 6: createCards(271, 324); break
            case 7: createCards(325, 378); break
            case 8: createCards(379, 432); break
            case 9: createCards(433, 486); break
            case 10: createCards(487, 540); break
            case 11: createCards(541, 594); break
            case 12: createCards(595, 648); break
            case 13: createCards(649, 702); break
            case 14: createCards(703, 756); break
            case 15: createCards(757, 810); break
            case 16: createCards(811, 864); break
            case 17: createCards(865, 900); break
      }
}

const createCards = (numInicio = 1, numFinal = 54) => {
      
      document.querySelector("#listado").innerHTML="";

    for(var i=numInicio;i<=numFinal;i++){

        let div = document.createElement('div');
        div.classList.add('column','is-2');

        let card = document.createElement('div');

        let cardImage =  document.createElement("div");
        cardImage.classList.add("card-image"/* ,'pt-1' */);

        let figure = document.createElement("figure");

        let cardContent= document.createElement("div");
        cardContent.classList.add("card-content");
    
        let img = document.createElement("img");
        img.classList.add('img')

        let hTitle= document.createElement("h2");
        hTitle.classList.add("is-4","title", "has-text-primary");

        let p1 = document.createElement("p");
        p1.classList.add('idPokemon');       
        
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        
        const fillCards = async () => {
            try {   
                  const infoPokemon = await fetch(URI2+[i])
                  const dataPokemon = await infoPokemon.json()
                  console.log(dataPokemon)
                  img.setAttribute("src",dataPokemon.sprites.other.home.front_default);

                  card.classList.add('card','has-background-white',borderColor(dataPokemon.base_experience))
                  figure.classList.add('image','is-square', bgColor(dataPokemon.base_experience)/* ,'figureSize' */);
                  
                  hTitle.innerText=dataPokemon.name;
                  p1.innerHTML="#"+dataPokemon.id;
            } catch (error) {
                  console.log(error)
                  hTitle.innerText='ERROR'
                  p2.classList.add('ml-3','has-text-white')
                  p2.innerHTML='404 - NOT FOUND'         
            }
        }
        fillCards()
        figure.append(img);

        cardContent.append(p1);
        cardContent.append(p2);
        cardImage.append(figure);
        cardContent.append(hTitle);
        card.append(cardImage);
        card.append(cardContent);

        div.append(card);
        document.querySelector("#listado").append(div);
        
      //   card.addEventListener("click", popup)
    };

}

const bgColor = colorNumber => {
      let colorBg
      if(colorNumber >= 0 && colorNumber < 50) {
            colorBg = 'agua-light'
      }
      else if(colorNumber >= 51 && colorNumber < 100) {
            colorBg = 'purple-light'
      }
      else if(colorNumber >= 101 && colorNumber < 150) {
            colorBg = 'orange-light'
      }
      else if(colorNumber >= 151 && colorNumber < 200) {
            colorBg = 'green-light'
      }
      else if(colorNumber >= 201 && colorNumber < 300) {
            colorBg = 'blue-light'
      }
      else if(colorNumber >= 301 && colorNumber < 350) {
            colorBg = 'red-light'
      }
      else{
            colorBg = 'black-light'
      }
      return colorBg
}
const borderColor = colorNumber => {
      let colorBg
      if(colorNumber >= 0 && colorNumber < 50) {
            colorBg = 'border-agua-light'
      }
      else if(colorNumber >= 51 && colorNumber < 100) {
            colorBg = 'border-purple-light'
      }
      else if(colorNumber >= 101 && colorNumber < 150) {
            colorBg = 'border-orange-light'
      }
      else if(colorNumber >= 151 && colorNumber < 200) {
            colorBg = 'border-green-light'
      }
      else if(colorNumber >= 201 && colorNumber < 300) {
            colorBg = 'border-blue-light'
      }
      else if(colorNumber >= 301 && colorNumber < 350) {
            colorBg = 'border-red-light'
      }
      else{
            colorBg = 'border-black-light'
      }
      return colorBg
}


createCards()