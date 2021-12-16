var circulo = document.querySelector(".circulo");
var lista = document.querySelector(".lista");
var dados = document.querySelector(".dados");
var campoAviso = document.querySelector(".campoAviso")
var segundos = 0 ;
var pontuação = 0;

var click = 1
var play = document.querySelector(".play");
var inicioDeJogo = false;
play.onclick = function(){
    if(contaLogin == true){
        if(click == 1){
            play.classList.toggle("inicize")
            iniciando();
            inicioDeJogo =true
            limparMenu()
        }
        click++
    }else{
        campoAviso.setAttribute('style','transform: scale(1);')
        campoNivel.classList.remove("mostra")
        document.querySelector(".nivel").classList.remove("addNivel")   
        campoHelp.classList.remove("mostra2")
        document.querySelector(".help").classList.remove("addHelp")
        campoUser.classList.remove("mostra3")
        document.querySelector(".user").classList.remove("addUser")
    }
}

function iniciando (){
    document.querySelector(".play").classList.toggle("add")
    contandoPontos();
    movendo()
    contandoTempo()
    desabilitar()
}

var time = document.querySelector(".tempo")
var ok ;
var local = document.querySelector(".dd");
var limite = 25;
function contandoTempo(){ 
    setInterval(contandoSegundos,1000);
    console.log(limite)
}
var vezes = 0;
var continuar;
function contandoSegundos(max){
        if(vezes < 1){
            time.innerHTML = "00:0" + segundos;
            if(segundos >=10){
                time.innerHTML = "00:" + segundos;
            }
            if( segundos <= limite){
                segundos++
                continuar = true;
            }
            if( segundos > limite){
                time.innerHTML = "Acabou"
                local.classList.toggle("apitar")
                segundos = 0
                vezes++
                continuar = false;
                inicioDeJogo = false;
                document.querySelector(".trofeu").classList.toggle("mostra");
                comparar()
            }
        }
    }
function contandoPontos(){
    var red1 = document.querySelector(".red1");
    var white1 = document.querySelector(".white1");
    var red2 = document.querySelector(".red2");
    var pontos = document.querySelector(".pontos")

        red1.onclick = function(){
                if (continuar == true){
                pontuação += 10 ;
                pontos.innerHTML = pontuação;
                }
        }
        
        white1.onclick = function(){
                if (continuar == true){
                pontuação += 20 ;
                pontos.innerHTML = pontuação;
                }
        }
        red2.onclick = function(){
                if (continuar == true){
                    pontuação += 30 ;
                    pontos.innerHTML = pontuação;
                }
            }
        }


function sorteiaNum(max){
    return Math.floor(Math.random() * max);
}
var tempoDeMovimentação = 1000;
function movendo(){
    setInterval(localiza,tempoDeMovimentação)
}
function localiza(){
        if (continuar == true){
            var X = sorteiaNum(675) + "px";
            var Y = sorteiaNum(375) + "px";
        
            circulo.style.top = Y;
            circulo.style.left = X;
           }
           if (continuar == false){
            circulo.style.transform =' scale(0)';
           }
        
        }

var inf = document.querySelector(".inf");
var spaceStatic = document.querySelector(".spaceStatic");
function calcula(){
    if(continuar == false){
        
        var media = ( pontuação / limite ).toFixed(2);
        document.querySelector(".stats").classList.toggle("add")
        inf.classList.toggle("clicou")
        inf.innerHTML = "<div class='indicador'><label>Stats</label></div>"+"<label class='textStatic'>Sua média foi: " + media + "</label>"; 

        campeoes.classList.remove("clicou2")  
        document.querySelector(".premios").classList.remove("add2")
    }
}
var campeoes = document.querySelector(".campeoes");
function exibePremio(){
    if(continuar == false){
        document.querySelector(".premios").classList.toggle("add2")
        campeoes.classList.toggle("clicou2")
        
        inf.classList.remove("clicou")
        document.querySelector(".stats").classList.remove("add")
    } 
}
var campoNivel = document.querySelector(".campoNivel");
var campoHelp = document.querySelector(".campoHelp");
var campoUser = document.querySelector(".campoUser");
function mostra(){
    if(inicioDeJogo == false){
        document.querySelector(".nivel").classList.toggle("addNivel")
        campoNivel.classList.toggle("mostra")
        
        campoHelp.classList.remove("mostra2")
        document.querySelector(".help").classList.remove("addHelp")

        campoUser.classList.remove("mostra3")
        document.querySelector(".user").classList.remove("addUser")
    }
    campoAviso.setAttribute('style','transform: scale(0);')
}
function mostra2(){
    if(inicioDeJogo == false){
        document.querySelector(".help").classList.toggle("addHelp")
        campoHelp.classList.toggle("mostra2")
            
        campoUser.classList.remove("mostra3")
        document.querySelector(".user").classList.remove("addUser")
    
        campoNivel.classList.remove("mostra")
        document.querySelector(".nivel").classList.remove("addNivel")
    }
    campoAviso.setAttribute('style','transform: scale(0);')
    
}
function mostra3(){
    if(inicioDeJogo == false){
        if(contaLogin == false){
            document.querySelector(".user").classList.toggle("addUser")
        campoUser.classList.toggle("mostra3")
        }
        campoNivel.classList.remove("mostra")
        document.querySelector(".nivel").classList.remove("addNivel")

        campoHelp.classList.remove("mostra2")
        document.querySelector(".help").classList.remove("addHelp")
    }
        campoAviso.setAttribute('style','transform: scale(0);')
}
function limparMenu(){
        campoNivel.classList.remove("mostra")
        document.querySelector(".nivel").classList.remove("addNivel")
            
        campoHelp.classList.remove("mostra2")
        document.querySelector(".help").classList.remove("addHelp")
    
        campoUser.classList.remove("mostra3")
        document.querySelector(".user").classList.remove("addUser")

        campoAviso.setAttribute('style','transform: scale(0);')
}
function mostraNew(){
    if(contaLogin == false){
        mostra3()
        visualizar('create')
        campoAviso.setAttribute('style','transform: scale(0);')
    }
}
function mostraEnter(){
    if(contaLogin == false){
        mostra3()
        visualizar('inicio')
        campoAviso.setAttribute('style','transform: scale(0);')
    }
}
function desabilitar(){
    document.querySelector('.campoNivel').setAttribute("style","transform : scale(0)");

    document.querySelector('.nivel').setAttribute("style","transform: translateX(-60px);box-shadow: 0 0 10px #ff0a6c99," +
    "0 0 20px #ff0a6c99,0 0 40px #ff0a6c99,0 0 80px #ff0a6c99;background: #ff0a6c; color: #000 ")
}