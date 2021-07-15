document.addEventListener("DOMContentLoaded", function () {
    const bigmenu = document.querySelectorAll('.tour_bigmenu ul li');
    const tourtype = document.querySelectorAll('.tour_type');
    const freeswiper = document.querySelector('.free-swiper');
    const packgeswiper = document.querySelector('.package-swiper');

    let swiper = '';
    let classon = '';

    if( classon == '' || classon == null){
        slideOn(freeswiper);
    }
    
    function slideOn(classon) {
        swiper = new Swiper(classon, {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            mousewheel: {
                invert: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
        });
    }
    
    bigmenu.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            bigmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');

            tourtype.forEach(item => item.classList.remove('on'));
            tourtype[index].classList.add('on');

            if(index == 0){
                classon = freeswiper;
                swiper.destroy();
            } else if (index == 1 ) {
                classon = packgeswiper;
                swiper.destroy();
            }
            slideOn(classon);
        });
    });


    const smallmenu = document.querySelectorAll('.tour_smallmenu li');
    const tour_lists = document.querySelectorAll('.tour_lists');

    smallmenu.forEach(function (item, index) {
        item.addEventListener('click', function () {
            smallmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');
            tour_lists.forEach(item => item.classList.remove('on'));
            tour_lists[index].classList.add('on');
        })
    })
})