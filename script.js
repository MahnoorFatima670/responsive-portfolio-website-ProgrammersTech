document.getElementById('menu-icon').addEventListener('click', function() {
    var navbarLinks = document.querySelector('.navbar');
    if (navbarLinks.style.display === 'block') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'block';
    }
});


var typed=new Typed(".text", {
    strings:["A Frontend Web Developer","A Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    });
