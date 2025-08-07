$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Programozó", "Webfejlesztő","Backend fejlesztő", "Egyetemista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programozás", "Backend", "Web", "Adatbázis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const logos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  ];
  const playground = document.getElementById('skills');
  const balls = [];

  function createBall(logo, color) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    const img = document.createElement('img');
    img.src = logo;
    img.style.background = color;
    ball.appendChild(img);

    ball.style.left = Math.random() * (window.innerWidth - 60) + 'px';
    ball.style.top = '0px';

    playground.appendChild(ball);
    balls.push({ el: ball, x: Math.random() * 2 - 1, y: 0, vy: 0 });
  }
  if(window.innerWidth < 970) { 
      for (let i = 0; i < 4; i++) {
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        var color = 'rgb('+red+','+green+','+blue+')';
        createBall(logos[i], color);
      }
  }

  else {  
      for (let i = 0; i < logos.length; i++) {
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        var color = 'rgb('+red+','+green+','+blue+')';
        createBall(logos[i], color);
      }
  }

  function animate() {
    balls.forEach(ball => {
      ball.vy += 0.5;
      let top = parseFloat(ball.el.style.top);
      let left = parseFloat(ball.el.style.left);

      top += ball.vy;
      left += ball.x * 2;

      if (top + 60 > window.innerHeight) {
        top = window.innerHeight - 60;
        ball.vy *= -0.9;
      }

      if (left <= 0 || left + 80 >= window.innerWidth) {
        ball.x *= -1;
      }
      ball.el.style.transform = `translate(${ball.xPos}px, ${ball.y}px)`;;
    });

    requestAnimationFrame(animate);
  }


  window.addEventListener("scroll", () => {
            if (window.scrollY < 51) {
                balls.forEach(ball => {
                ball.vy = -10;
                });
            }
})
  animate();

function detectLanguage(code) {
     const jsKeywords = ['function', 'console.log', 'let', 'var', 'const', 'for', 'while', 'if', 'else', 'alert', 'document', 'getElementById', 'innerText'];
     let jsMatches = jsKeywords.some(keyword => code.includes(keyword));
     if (jsMatches) {
         return 'javascript';
     }  
     else {
         return 'unknown';
     }
 }

function detectAndRunCode() {
     const code = document.getElementById('codeArea').value;
     const language = detectLanguage(code);
     if (language === 'javascript') {
         runJavaScript(code);
     }
      else {
         document.getElementById('output').innerText = 'Nem sikerült felismerni a nyelvet.';
     }
 }



function runJavaScript(code) {
    try {
        const result = eval(code);
        document.getElementById('output').innerText = "Siker";
        
    } catch (error) {
        document.getElementById('output').innerText = `Hiba (JavaScript): ${error.message}`;
    }
}
