var lastScrollTop = 0;
navbar = document.getElementById("container")
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop>lastScrollTop){
        container.style.top = "-80px";
    } else {
        container.style.top = "0";
    }
    lastScrollTop = scrollTop;
})