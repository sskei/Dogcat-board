const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons =  document.querySelector('.navbar_icons');

// api 사용 
toggleBtn.addEventListener('click',()=>{

    menu.classList.toggle('active'); 
    // 마우스클릭햇을때 토글링
    icons.classList.toggle('active');
});


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
