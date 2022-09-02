const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) {//when close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElement.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } else {//open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElement.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })


    }

})
