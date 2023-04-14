AOS.init();
window.sr = ScrollReveal({reset : true});
sr.reveal('.img1', {duration: 3000})
//sr.reveal('.img2',{duration:4000})

//Funções
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

const ativaMenu = document.querySelector(".fa-bars")

ativaMenu.addEventListener("click",()=>{
    ativaMenu.classList.toggle('fa-x')
})

escrevendoLetra();