
if (window.performance.navigation.type == 1) {
      location.href = '../html/introScreen.html';
}
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

    for(var i=numInicio;i<=numFinal;i++){

        let div = document.createElement('div');
        div.classList.add('column','is-2');

        let card = document.createElement('div');
        let hTitle= document.createElement("h2")
        let p1 = document.createElement("p")   
        let figure = document.createElement("figure")
        let cardImage =  document.createElement("div")
        cardImage.classList.add("card-image")
        
        let cardContent= document.createElement("div")
        cardContent.classList.add("card-content")
    
        let img = document.createElement("img")
        img.classList.add('sizeImg')

        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        
        const fillCards = async () => {
            try {   
                  const infoPokemon = await fetch(URI2+[i])
                  const dataPokemon = await infoPokemon.json()
                  //console.log(dataPokemon)
                  img.setAttribute("src",dataPokemon.sprites.other.home.front_default)

                  card.classList.add('card','has-background-white',borderColor(dataPokemon.base_experience))
                  figure.classList.add(bgColor(dataPokemon.base_experience))

                  namePoke = dataPokemon.name
                  hTitle.innerText=namePoke.charAt(0).toUpperCase()+namePoke.slice(1)
                  hTitle.classList.add('is-4','titleCard',titleCard(namePoke.length), "has-text-primary")

                  p1.classList.add('idPokemon', idPokemon(dataPokemon.id))
                  p1.innerHTML="#"+dataPokemon.id
                  p3.innerHTML=dataPokemon.base_experience+' EXP.🏹'
                  p3.classList.add('p3')

            } catch (error) {
                  console.log(error)
                  hTitle.innerText='ERROR'
                  p2.classList.add('ml-3','has-text-white')
                  p2.innerHTML='404 - NOT FOUND'         
            }
        }
        fillCards()

        cardContent.append(hTitle)
        figure.append(img)
        cardImage.append(figure)
        cardContent.append(p1)
        cardContent.append(p2)
        cardContent.append(p3)
        
        card.append(cardImage)
        card.append(cardContent)
        div.append(card)

        document.querySelector("#listado").append(div)
        
      //   card.addEventListener("click", popup)
    }
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
      let borderColor
      if(colorNumber >= 0 && colorNumber < 50) {
            borderColor = 'border-agua-light'
      }
      else if(colorNumber >= 51 && colorNumber < 100) {
            borderColor = 'border-purple-light'
      }
      else if(colorNumber >= 101 && colorNumber < 150) {
            borderColor = 'border-orange-light'
      }
      else if(colorNumber >= 151 && colorNumber < 200) {
            borderColor = 'border-green-light'
      }
      else if(colorNumber >= 201 && colorNumber < 300) {
            borderColor = 'border-blue-light'
      }
      else if(colorNumber >= 301 && colorNumber < 350) {
            borderColor = 'border-red-light'
      }
      else{
            borderColor = 'border-black-light'
      }
      return borderColor
}
const idPokemon = (id) =>{
      let positionId

      if(id >= 1 && id <=9){
            positionId = 'idPokemon0-9'
      }
      else if(id >= 10 && id <=99){
            positionId = 'idPokemon10-99'
      }
      else{
            positionId='idPokemon100'
      }
      return positionId
}
const titleCard = (nameLength) =>{
      let classCss

      if(nameLength <= 10) classCss= 'titleCard-10letters'

      else if( nameLength<=14) {
            classCss = 'titleCard-14letters'
      }
      else if ( nameLength<=18){
            classCss = 'titleCard-18Letters'
      }else{
            classCss ='titleCard-19letters'
      }
      return classCss
}
createCards()