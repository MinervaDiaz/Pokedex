if (window.performance.navigation.type == 1) {
      location.href = '../html/introScreen.html';
}
var URI = 'https://pokeapi.co/api/v2/pokemon/'

window.onload = () => {
      createCards()

      document.getElementById("delete").addEventListener("click", function () {
            document.querySelector("#popup").classList.toggle("is-active");
      });
}

document.querySelector("#search").addEventListener("keypress", function (evt) {
      if (event.keyCode === 13) {
            let pokemon = event.target.value
            createCards(1, 1, pokemon)
      }
});

const createCards = (numInicio = 1, numFinal = 54, namePokemon = '') => {

      document.querySelector('#listaCards').innerHTML = ''

      for (var i = numInicio; i <= numFinal; i++) {

            let div = document.createElement('div');
            div.classList.add('column', 'is-2');

            let card = document.createElement('div');
            let hTitle = document.createElement("h2")
            let p1 = document.createElement("p")
            let figure = document.createElement("figure")
            let cardImage = document.createElement("div")
            cardImage.classList.add("card-image")

            let cardContent = document.createElement("div")
            cardContent.classList.add("card-content")

            let img = document.createElement("img")
            img.classList.add('sizeImg')

            let p2 = document.createElement("p")
            let p3 = document.createElement("p")
            let p4 = document.createElement("p")
            p4.classList.add('p4')

            const fillCards = async () => {
                  let endPoint
                  namePokemon = namePokemon.toLowerCase()

                  try {
                        if (namePokemon.length != 0) {
                              endPoint = URI + namePokemon
                              btn_1.classList.remove('is-focused')

                        } else if (namePokemon.length == 0) endPoint = URI + [i]

                        const infoPokemon = await fetch(endPoint)
                        const dataPokemon = await infoPokemon.json()

                        namePoke = dataPokemon.name

                        img.setAttribute("src", dataPokemon.sprites.other.home.front_default)
                        card.classList.add('card', 'has-background-white', borderColor(dataPokemon.base_experience))
                        figure.classList.add(bgColor(dataPokemon.base_experience))
                        hTitle.innerText = namePoke.charAt(0).toUpperCase() + namePoke.slice(1)
                        hTitle.classList.add('is-4', 'titleCard', titleCard(namePoke.length), "has-text-primary")
                        p1.classList.add('idPokemon', idPokemon(dataPokemon.id))
                        p1.innerHTML = '#'+dataPokemon.id
                        p3.innerHTML = '🎖️' + dataPokemon.base_experience
                        p3.classList.add('p3')
                        p4.innerHTML = 'EXP'

                        card.addEventListener("click", function () {

                              titleNamePokemon = dataPokemon.name
                              titleModal = titleNamePokemon.charAt(0).toUpperCase() + titleNamePokemon.slice(1)
                              document.querySelector('#title').innerHTML = titleModal
                              
                              let modalHead = document.querySelector('#modalHead')
                              modalHead.classList.add(bgColor(dataPokemon.base_experience))
                              let imgPokemon = document.querySelector('#imgPokemon')
                              imgPokemon.setAttribute('src', dataPokemon.sprites.other.home.front_shiny)
                              document.querySelector("#popup").classList.toggle('is-active');
                              let height = document.querySelector('#height')
                              height.innerHTML = `${dataPokemon.height}`
                              let weight = document.querySelector('#weight')
                              weight.innerHTML = `weight: ${dataPokemon.weight}`
                              let p5 = document.querySelector('#id')
                              p5.innerHTML = `Nº ${dataPokemon.id}`

                              pokemonTypes = dataPokemon.types

                              for (var j = 0; j < pokemonTypes.length; j++) {
                                    let spanTypes = document.createElement('span')
                                    spanTypes.classList.add('tag', 'mr-1','has-text-white','sizeTypes', typeColor(pokemonTypes[j].type.name))
                                    spanTypes.innerHTML = `${pokemonTypes[j].type.name}`
                                    document.querySelector('#footerModal').append(spanTypes)
                              }
                        })
                  } catch (e) {
                        hTitle.innerText = 'ERROR 404 😢'
                        hTitle.classList.add('has-text-white', 'is-5')
                        card.classList.add('has-background-danger')
                        p2.classList.add('ml-3', 'p-1', 'has-text-white')
                        p2.innerHTML = 'POKEMON NOT FOUND'
                  }
            }
            fillCards()

            cardContent.append(hTitle)
            figure.append(img)
            cardImage.append(figure)
            cardContent.append(p1)
            cardContent.append(p2)
            cardContent.append(p3)
            cardContent.append(p4)
            card.append(cardImage)
            card.append(cardContent)
            div.append(card)
            document.querySelector("#listaCards").append(div)
      }
}

const btnClicked = (pagNumber) => {
      document.querySelector('#search').value = ('')

      btn_1 = document.querySelector('#btn_1')
      btn_1.classList.remove('is-focused')

      if(pagNumber === 1) createCards(1, 54)
      else if(pagNumber === 2) createCards(55, 108)
      else if(pagNumber === 3) createCards(109, 162)
      else if(pagNumber === 4) createCards(163, 216)
      else if(pagNumber === 5) createCards(217, 270)
      else if(pagNumber === 6) createCards(271, 324)
      else if(pagNumber === 7) createCards(325, 378)
      else if(pagNumber === 8) createCards(379, 432)
      else if(pagNumber === 9) createCards(433, 486)
      else if(pagNumber === 10) createCards(487, 540)
      else if(pagNumber === 11) createCards(541, 594)
      else if(pagNumber === 12) createCards(595, 648)
      else if(pagNumber === 13) createCards(649, 702)
      else if(pagNumber === 14) createCards(703, 756)
      else if(pagNumber === 15) createCards(757, 810)
      else if(pagNumber === 16) createCards(811, 864)
      else createCards(865, 900)
}

const bgColor = colorNumber => {
      let colorBg

      if (colorNumber >= 0 && colorNumber < 50) colorBg = 'agua-light'
      else if (colorNumber >= 51 && colorNumber < 100)  colorBg = 'purple-light'
      else if (colorNumber >= 101 && colorNumber < 150) colorBg = 'orange-light'
      else if (colorNumber >= 151 && colorNumber < 200) colorBg = 'green-light'
      else if (colorNumber >= 201 && colorNumber < 300) colorBg = 'blue-light'
      else if (colorNumber >= 301 && colorNumber < 350) colorBg = 'red-light'
      else colorBg = 'black-light'

      return colorBg
}

const borderColor = colorNumber => {
      let borderColor

      if (colorNumber >= 0 && colorNumber < 50) borderColor = 'border-agua-light'
      else if (colorNumber >= 51 && colorNumber < 100) borderColor = 'border-purple-light'
      else if (colorNumber >= 101 && colorNumber < 150) borderColor = 'border-orange-light'
      else if (colorNumber >= 151 && colorNumber < 200) borderColor = 'border-green-light'
      else if (colorNumber >= 201 && colorNumber < 300) borderColor = 'border-blue-light'
      else if (colorNumber >= 301 && colorNumber < 350) borderColor = 'border-red-light'
      else borderColor = 'border-black-light'

      return borderColor
}

const idPokemon = (id) => {
      let positionId

      if (id >= 1 && id <= 9)        positionId = 'idPokemon0-9'
      else if (id >= 10 && id <= 99) positionId = 'idPokemon10-99'
      else positionId = 'idPokemon100'

      return positionId
}

const titleCard = (nameLength) => {
      let classCss

      if (nameLength <= 10) classCss = 'titleCard-10letters'
      else if (nameLength <= 14) classCss = 'titleCard-14letters'
      else if (nameLength <= 18) classCss = 'titleCard-18Letters'
      else classCss = 'titleCard-19letters'

      return classCss
}

const typeColor = (type) =>{
      let colorType
      switch(type){
            case 'grass': colorType = 'typeGrass';    break
            case 'poison': colorType = 'typePoison';  break
            case 'fire': colorType = 'typeFire';      break
            case 'bug': colorType = 'typeBug';        break
            case 'flying': colorType = 'typeFlying';  break
            case 'water': colorType = 'typeWater';    break
            case 'normal': colorType = 'typeNormal';  break
            case 'ground': colorType = 'typeGround';  break

            default: colorType = 'typePoison'
      }
      return colorType
}