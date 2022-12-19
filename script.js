window.addEventListener('DOMContentLoaded', () => {
    // animated welcome starts here
    // Wrap every letter in a span
    var textWrapper = document.querySelector(' .ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"
    ); anime.timeline({ loop: true }).add({
        targets: '.ml12 .letter', translateX: [40, 0],
        translateZ: 0, opacity: [0, 1], easing: "easeOutExpo", duration: 1200, delay: (el, i) => 500
            + 30 * i
    })
        .add({
            targets: '.ml12 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
        });
    //animated welcome ends here

    // sliding div starts here
    let webBody = document.getElementsByTagName('body')[0];
    let responsiveIconContainer = document.querySelector('.base');
    let responsiveIcon = document.querySelector('.bar');
    let responsiveNav = document.querySelector('#nav-links-container');
    let responsiveNavLinks = document.querySelectorAll('.nav-links');

    responsiveIconContainer.addEventListener('click', () => {
        if (window.innerWidth < 450) {
            webBody.classList.toggle('disable-overflow');
        }
        responsiveNav.classList.toggle('show');
        responsiveIcon.classList.toggle('active');
    });

    responsiveNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            webBody.classList.remove('disable-overflow');
            responsiveNav.classList.remove('show');
            responsiveIcon.classList.remove('active');
        })
    });
});