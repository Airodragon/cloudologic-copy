// JS FOR FIXING NAVBAR  AFTER SCROLLING TO SOME DISTANCE

window.addEventListener('scroll',()=>{
    const nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;
    if(scrollPosition > 100){
        nav.classList.add('fixed-top');
        nav.classList.add('bg-light')
    }
    else{
        nav.classList.remove('fixed-top');
        nav.classList.remove('bg-light')

    }
})
