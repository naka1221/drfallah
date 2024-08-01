

 window.addEventListener('scroll',  function(){
    const scrollTopfix = document.documentElement.scrollTop
    if(window.innerWidth > 991){
        console.log("jjkjzkjk")
        if(scrollTopfix>180) {
            document.querySelector('.down-nav').classList.add('fixed');
            console.log("jjkjzkjk")

        }
        else{
            document.querySelector('.down-nav').classList.remove('fixed');
  
        }
    }
  })
///////////////////////////////////////////////////////////////////////

//   let swipertow = new Swiper(".mySwiper", {
//     direction: 'vertical',
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper3 = new Swiper(".mySwiper3", {
//     direction: 'vertical',
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
    
//   },

// });



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})





