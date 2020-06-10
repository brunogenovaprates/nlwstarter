
//funcao para tratar estado e cidade no select box
function populateUFs(){
    const ufSelect = document.querySelector("[name=uf]") //pega o item na página que contenha o name
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>  res.json() )//funcao anonima que está retornando um valor
    .then(states => { 

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` //pegar você mesmo e soma com o resultado. igual a  ufSelect.innerHTML =  ufSelect.innerHTML + algo...
        }
   
    })
}

populateUFs()


function getCities(event){
    const citySelect = document.querySelector("[name=city]") //pega o campo do html que será alterado. 
    const stateInput = document.querySelector("[name=state]") //pega o item na página que contenha o name
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = `<option value="">Selecione a cidade</option>` //limpar o campo para dados ficarem sempre os mais atualizados
    citySelect.innerHTML = true //bloquerar o campo para  usabilidade
   
    fetch(url)
   .then(res =>  res.json() )//funcao anonima que está retornando um valor
   .then(cities => {
       
    

     for(const city of cities){
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` //pegar você mesmo e soma com o resultado. igual a  ufSelect.innerHTML =  ufSelect.innerHTML + algo...
       }
       citySelect.disabled = false
   })
}


document
    .querySelector("select[name=uf]") //pega o item na página que contenha o name
    .addEventListener("change", getCities)//quando mudar irá executar a função.

//---------------------------------------------------------------------------------------
// Itens da coleta
// Ouvir de eventos para interagir com os elementos
// pegar todos os LI para fazerem ficarem clicaveis
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

//

let selectedItems = []

function handleSelectedItem(){
    const itemLi = event.target

    // adicionar ou remover uma classe no html com javaScript
    // add ou remove ou toggle (liga e desliga, inteligente)
    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id
    
    
    //verificar se existem itens selecionado, se sim 
    //funcao anonima que recebe um item e verifica se o item

    //findIndex irá verificar se existe index 0 ou seja se é vazio ou não. ele já dora o vetor, pulando item a item comprando. 
    // =atribuir valor == comprar valor
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound =  item == itemId //isso será true ou false
        return itemFound//retorna na variavel
    })    //com arrow funcion ficaria: const alreadySelected = selectedItems.findIndex(item => item == itemId)
    
    //pegar os itens selecionados, if not
    // se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item =>){
            return  false
        
    })
}
    


    // se não estiver selecionado, adicionar a seleção

    //atualizar o campo escondido com os dados selecionados




    
}
    


