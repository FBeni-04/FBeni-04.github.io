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
