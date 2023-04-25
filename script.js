
//FUNÇÕES
function escrevendoLetra(){
    function ativarLetra(elemento){
        const arrtexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrtexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        })
    }

    const titulo = document.querySelector('.digitando');
    ativarLetra(titulo);
}

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars')
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener("click",()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

function habExp(){

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');

    divExperiencia[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')

    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index);
        })
    })

}

//CHAMADA DAS FUNÇÕES
escrevendoLetra();
habExp();
menuMobol();