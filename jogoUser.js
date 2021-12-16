var campoUser = document.querySelector(".campoUser")
var contaLogin = false;

function visualizar(pagina){
    campoUser.setAttribute('page',pagina)
}
function creating(){
    let nomeCreate = document.querySelector('.nameCreate').value
    let senhaCreate = document.querySelector('.passwordCreate').value
    if(nomeCreate.length > 3 && nomeCreate.length <= 8 && senhaCreate.length > 4 ){
        let listaConta = JSON.parse(localStorage.getItem('listaConta') || '[]')
        listaConta.push({
                nomeConta : nomeCreate,
                senhaConta : senhaCreate
            })
            nomeDoUser = nomeCreate
            localStorage.setItem('listaConta',JSON.stringify(listaConta))
            contaLogin = true;
            document.querySelector('.user').setAttribute("style","transform: translateX(-60px);box-shadow: 0 0 10px #c22ed099,0 0 20px #c22ed099,0 0 40px #c22ed099,0 0 80px #c22ed099;background:  #c22ed0; color: #000 ")
            document.querySelector(".campoUser").classList.remove("campoUser")
    }
    else{
        document.querySelector('.nameCreate').setAttribute("style","border: 1.5px solid red")
        document.querySelector('.passwordCreate').setAttribute("style","border: 1.5px solid red")
    }
}

let nomeDoUser;
function entering(){
    let nomeCreate = document.querySelector('.userSign')
    let senhaCreate = document.querySelector('.passwordSign')
    let listaConta =[]

    if(nomeCreate.value != "" && senhaCreate.value != ""){
        let contaValid = {
            nome: "",
            senha: ""
        }
        listaConta = JSON.parse(localStorage.getItem('listaConta'))
        listaConta.forEach((item) => {
            if(nomeCreate.value == item.nomeConta && senhaCreate.value == item.senhaConta){
                contaValid = {
                    nome: item.nomeConta,
                    senha: item.senhaConta
                }
                nomeDoUser = contaValid.nome
            }
        })

        if(nomeCreate.value == contaValid.nome && senhaCreate.value == contaValid.senha){    
            contaLogin = true;
            document.querySelector('.user').setAttribute("style","transform: translateX(-60px);box-shadow: 0 0 10px #c22ed099,0 0 20px #c22ed099,0 0 40px #c22ed099,0 0 80px #c22ed099;background:  #c22ed0; color: #000 ")
            document.querySelector(".campoUser").classList.remove("campoUser")
        }
        else{
            senhaCreate.setAttribute("style","border: 1.5px solid red")
            nomeCreate.setAttribute("style","border: 1.5px solid red")
        }
    }
}

function comparar(){
    let campoes = document.querySelector('.campeoes');
    if(pontuação >= 400 && pontuação < 600 && nivelDeJogo == 'easy'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#b36e07;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label> "
    }else if(pontuação >= 600 && pontuação < 800 && nivelDeJogo == 'easy'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ccc;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label>"
    }else if (pontuação >= 800 && nivelDeJogo == 'easy'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ffe53b;'></ion-icon><label style='color:#fafafa; font-size:20px;margin-top:5px;'>"+ pontuação + "<label>"
    }
    
    else if (pontuação >= 150 && pontuação < 250 && nivelDeJogo == 'medium'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#b36e07;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label> "
    }else if (pontuação >= 250 && pontuação < 300 && nivelDeJogo == 'medium'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ccc;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label>"
    }
    else if (pontuação >= 300 && nivelDeJogo  == 'medium'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ffe53b;'></ion-icon><label style='color:#fafafa; font-size:20px;margin-top:5px;'>"+ pontuação + "<label>"
    }

    else if (pontuação >= 50 && pontuação < 100 && nivelDeJogo == 'hard'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#b36e07;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label> "
    }else if (pontuação >= 100 && pontuação < 150 && nivelDeJogo == 'hard'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ccc;'></ion-icon><label style='color:#fafafa; font-size:20px;margin:5px;text-align: center;'>"+ pontuação + "<label>"
    }else if (pontuação >= 150 && nivelDeJogo  == 'hard'){
        campoes.innerHTML = "<ion-icon name='medal-outline' style='font-size:80px; color:#ffe53b;'></ion-icon><label style='color:#fafafa; font-size:20px;margin-top:5px;'>"+ pontuação + "<label>"
    }
    else{ 
        campoes.innerHTML = "<label style='color:#ff2525; font-size:40px;'>Lose<label>"
    }

}
let nivelDeJogo = 'easy';
function nivel(nivel){
    if(nivel == 'easy'){
        limite = 25;
        tempoDeMovimentação = 1000;
    }
    if(nivel == 'medium'){
        limite = 20;
        tempoDeMovimentação = 750;
    }
    if(nivel == 'hard'){
        limite = 15;
        tempoDeMovimentação = 500;
    }
    nivelDeJogo = nivel
    desabilitar()
}
