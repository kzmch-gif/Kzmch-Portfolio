//Slick slider infinity scroll
$('.responsive').slick({
    infinite: false,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 9,
    cssEase: 'linear',
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
    autoplay: true,
    dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
    autoplay: true,
    slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

//Slick slider portfolio
$('.projects-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        } ,
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

//Animation on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            return 0
        }
    }
}

window.addEventListener("scroll", reveal);