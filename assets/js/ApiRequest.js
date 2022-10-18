/* Filtro por Expansão */
function filtros(expansao){
    
    var expansaoFiltro = expansao
    
    const data = null;

    const requisicao = new XMLHttpRequest();
    requisicao.withCredentials = true;
    
    requisicao.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/"+expansaoFiltro+"?collectible=1&locale=ptBR", false);
    requisicao.setRequestHeader("X-RapidAPI-Key", "c8cc595170mshda399f5c2f87254p1f3d2fjsn5e58bc5be333");
    requisicao.setRequestHeader("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com");
    requisicao.send(data);
    var retorno = JSON.parse(requisicao.responseText);
    var cartas = document.getElementById("teste");
    cartas.innerHTML = '';
    console.log(retorno)
    for(i in retorno){
        var imagem = retorno[i].img;
        
        if (cardName != retorno[i].name) {
            if (imagem != null) {
                if (retorno[i].type != "Hero") {

                var a = document.createElement('a');
                var img = document.createElement('img');
                a.appendChild(img)
                cartas.appendChild(a)
                img.src = imagem;
                img.classList.add('col-lg-3')
                img.classList.add('col-md-4')
                img.classList.add('col-sm-6')
                img.classList.add('cartasHover')
                
                }
            }
        }
        var cardName = retorno[i].name;
    }
    var nome = document.getElementById('conjuntoNome');
    
    if (expansaoFiltro == 'Madness%20at%20the%20Darkmoon%20Faire') {
        nome.innerHTML = ' Conjunto: Delirios em Negraluna'
        
    }
    else if(expansaoFiltro == 'Murder%20at%20Castle%20Nathria'){
        nome.innerHTML = ' Conjunto: Assassinato no Castelo de Nathiria'
        
    }
    else if(expansaoFiltro == 'Knights%20of%20the%20Frozen%20Throne'){
        nome.innerHTML = ' Conjunto: Cavaleiros do Trono de Gelo'
    }
    else if(expansaoFiltro == 'Naxxramas'){
        nome.innerHTML = ' Conjunto: Maldição de Naxxramas'
    }
    else{
        nome.innerHTML = ' Conjunto: Clássico'
    }
}
/* Filtro de pesquisa */
function pesquisaCards(){
    var textoBusca = document.getElementById('searchText').value;
    const data = null;

    const buscaReq = new XMLHttpRequest();
    buscaReq.withCredentials = true;

    buscaReq.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/"+textoBusca+"?collectible=1&locale=ptBR", false);
    buscaReq.setRequestHeader("X-RapidAPI-Key", "c8cc595170mshda399f5c2f87254p1f3d2fjsn5e58bc5be333");
    buscaReq.setRequestHeader("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com");

    buscaReq.send(data);
    var retorno = JSON.parse(buscaReq.responseText);
        var cartas = document.getElementById("teste");
    cartas.innerHTML = '';
    for(i in retorno){
        var imagem = retorno[i].img;
        if (cardName != retorno[i].name) {
            if (imagem != null) {
                var a = document.createElement('a');
                var img = document.createElement('img');
                a.appendChild(img)
                cartas.appendChild(a)
                img.src = imagem;
                img.classList.add('col-lg-3')
                img.classList.add('col-md-4')
                img.classList.add('col-sm-6')
                img.classList.add('cartasHover')
                
            }
        }
        var cardName = retorno[i].name;
    }
    var nome = document.getElementById('conjuntoNome');
    nome.innerHTML = '';
}   

/* Busca Versos */
function versos(){

    const data = null;

    const xhr02 = new XMLHttpRequest();
    xhr02.withCredentials = true;
    
    xhr02.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks?locale=ptBR", false);
    xhr02.setRequestHeader("X-RapidAPI-Key", "c8cc595170mshda399f5c2f87254p1f3d2fjsn5e58bc5be333");
    xhr02.setRequestHeader("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com");

    xhr02.send(data);
    var retorno = JSON.parse(xhr02.responseText);
    var versos = document.getElementById("versosCard")
    versos.innerHTML = ''
    for (const i in retorno) {
        
        var versoimagem = retorno[i].imgAnimated;
        var versoNome = retorno[i].name;
        
        if (versoimagem != null) {
            var divPrimeira = document.createElement('div');
            divPrimeira.classList.add('item')

            var divSegunda = document.createElement('div');
            divSegunda.classList.add('thumb')

            var divTerceira = document.createElement('div');
            divTerceira.classList.add('hover-effect')

            var divQuarta = document.createElement('div');

            var divQuinta = document.createElement('div');

            var imgVerso = document.createElement('img');

            var hyperLink = document.createElement('a');

            var nomeVerso = document.createElement('h4');

            versos.appendChild(divPrimeira)
            divPrimeira.appendChild(divSegunda)
            divPrimeira.appendChild(divQuarta)

            divSegunda.appendChild(hyperLink)
            divSegunda.appendChild(divQuinta)

            divQuinta.appendChild(nomeVerso)
            divQuinta.classList.add('text-center')

            nomeVerso.innerHTML = versoNome

            hyperLink.appendChild(imgVerso)

            imgVerso.src = versoimagem;
            imgVerso.style.cursor = 'pointer'
            imgVerso.setAttribute('data-bs-toggle', 'modal')
            imgVerso.setAttribute('data-bs-target', '#detalhesVerso')
            imgVerso.onclick = function(cardBackid){
                carregaDetalhes(i);
            }
            imgVerso.classList.add('versoHover')
        }
    }
    var nomeVersoModal = document.getElementById('nomeVerso')
    nomeVersoModal.innerHTML = versoNome
}
versos();

/* Carrega Detalhes dos versos */
function carregaDetalhes(id){
    var idVerso = id;
    const data = null;

    const xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;

    xhttp.open("GET", 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks?locale=ptBR', false); 
    xhttp.setRequestHeader("X-RapidAPI-Key", "c8cc595170mshda399f5c2f87254p1f3d2fjsn5e58bc5be333");
    xhttp.setRequestHeader("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com");
    xhttp.send(data)
    var retorno = JSON.parse(xhttp.responseText);
    var versoimagem = retorno[idVerso].imgAnimated;
    var versoNome = retorno[idVerso].name;
    var descricaoVerso = retorno[idVerso].description;
    
    var detalhes = document.getElementById('nomeVerso');
    detalhes.innerHTML = versoNome

    var detalhes = document.getElementById('imgVerso');
    detalhes.src = versoimagem

    var detalhes = document.getElementById('descricaoVerso');
    detalhes.innerHTML = descricaoVerso
    
}

