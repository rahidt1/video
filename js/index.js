const video = document.querySelector('.video');
const btn = document.querySelector('.switch-btn');

// Video
btn.addEventListener('click', () => {
  if(!btn.classList.contains('slide')){
    btn.classList.add('slide');
    video.pause();
  }
  else{
    btn.classList.remove('slide');
    video.play();
  }
})

// Preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
  preloader.classList.add('preloader--hide');
})