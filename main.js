$('.carousel').carousel({
  interval: 2000
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    window.scroll(0,0);
}