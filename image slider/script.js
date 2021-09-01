// immediate invoke of function expression
(function () {
    const imageArray = [
        'img_1',
        'img_2',
        'img_3',
        'img_4',
        'img_5'
    ];

    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn')
    const carousel = document.querySelector('.carousel')
    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('left-button')) {
                counter--
                if (counter < 0) {
                    counter = imageArray.length - 1
                }
                carousel.style.backgroundImage = `url('./img/${imageArray[counter]}.jpg')`
            }
            if (button.classList.contains('right-button')) {
                counter++
                if (counter > imageArray.length - 1) {
                    counter = 0
                }
                carousel.style.backgroundImage = `url('./img/${imageArray[counter]}.jpg')`
            }
        })
    })
})();