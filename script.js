window.onscroll = function() {
    showBackToTopBtn();
};

function showBackToTopBtn() {
    var backToTopBtn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
}
}
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
var backToTopBtn = document.getElementById("back-to-top-btn");
backToTopBtn.addEventListener("click", backToTop);