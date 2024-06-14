function toggleMenu(){
    var headerSection=document.querySelector('.header-section');
    headerSection.classList.toggle('active');

}

function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var elementtop=reveals[i].getBoundingClientRect().top;
        var elementvisible=150;

        if(elementtop<windowheight-elementvisible){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal)