
//FUNÇÕES
function typingLyric_effect(){
    function activateLyric(element){
        const arrtext = element.innerHTML.split('');
        element.innerHTML = '';
        arrtext.forEach((lyric, i)=>{
            setTimeout(()=>{
                element.innerHTML += lyric;
            }, 75 * i)
        })
    }

    const tittle = document.querySelector('.typing_effect');
    activateLyric(tittle);
}

function menuIconMobile(){
    const activateMenu = document.querySelector('.fa-bars')
    const navigationMenu = document.querySelector('header .navigation_shortcuts')

    activateMenu.addEventListener("click",()=>{ 
        activateMenu.classList.toggle('fa-x')
        navigationMenu.classList.toggle('activated')
    })
}

function experience_block(){
    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('activated');
        });
        liExperience.forEach((button)=>{
            button.classList.remove('activated');
        });
        divExperience[index].classList.add('activated');
        liExperience[index].classList.add('activated');
    }

    const divExperience = document.querySelectorAll('.experience_content div');
    const liExperience = document.querySelectorAll('.experience_content ul li');

    divExperience[0].classList.add('activated')
    liExperience[0].classList.add('activated')

    liExperience.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index);
        });
    });
}

//CHAMADA DAS FUNÇÕES
experience_block();
typingLyric_effect();
menuIconMobile();
