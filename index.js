// Smooth Scroll With JQuery
$(document).ready(() => {
    $('html, body').animate({
        scrollTop: 0
    }, 600)
    $('nav ul li a').on('click', function (e) {
        if (this.hash !== '') {
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 140 + 'px'
            }, 1100)
        }
    })
})

// Showing The Custom Scroll To Top Tool
window.addEventListener('scroll', () => {
    document.querySelector('.up-tool').classList.toggle('active', window.scrollY > 100);

})

// Scroll To Top With The Custom Tool
$('.up-tool').on('click', () => {
    $('html, body').animate({
        scrollTop: 0
    }, 1000)
})