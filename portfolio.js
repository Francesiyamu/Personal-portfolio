// Header toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
})


//Typing effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!'],
    typedspeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})
