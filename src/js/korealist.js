document.addEventListener("DOMContentLoaded", function () {
    const bigmenu = document.querySelectorAll('.tour_bigmenu ul li');
    const tourtype = document.querySelectorAll('.tour_type');

    const kortourswiper = document.querySelector('.kortour-swiper');
    const ticketswiper = document.querySelector('.ticket-swiper');
    const trainswiper = document.querySelector('.train-swiper');
    const golfswiper = document.querySelector('.golf-swiper');

    const smallmenu = document.querySelectorAll('.tour_smallmenu');
    const smallmenuList = document.querySelectorAll('.tour_smallmenu li');

    const smallcontents = document.querySelectorAll('.tour_smallcontents');
    const tour_lists = document.querySelectorAll('.tour_lists');

    let swiper = '';
    let classon = '';

    if (classon == '' || classon == null) {
        slideOn(kortourswiper);
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

            if (index < 3) {
                smallmenu[index].firstElementChild.classList.add('on');
            }
            smallcontents[index].firstElementChild.classList.add('on');

            if (index == 0) {
                classon = kortourswiper;
                swiper.destroy();
            } else if (index == 1) {
                classon = trainswiper;
                swiper.destroy();
            } else if (index == 2) {
                classon = golfswiper;
                swiper.destroy();
            } else if (index == 3) {
                classon = ticketswiper;
                swiper.destroy();
            }
            slideOn(classon);
        });
    });

    smallmenuList.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            smallmenuList.forEach(item => item.classList.remove('on'));
            item.classList.add('on');

            tour_lists.forEach(item => item.classList.remove('on'));
            tour_lists[index].classList.add('on');
        });
    });

    const viewbtn = document.querySelector('.viewbtn');
    const notview = document.querySelectorAll('.notview');
    let i = 0;

    viewbtn.addEventListener('click', function (e) {
        e.preventDefault();

        notview[i].classList.remove('notview');
        if (i == notview.length - 1) {
            viewbtn.style.display = 'none';
        }
        i += 1;
    })
})