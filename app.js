
let left = document.getElementById('left');
let right = document.getElementById('right');
let fleft = document.getElementById('fleft');
let fright = document.getElementById('fright');
let fbox = document.getElementById('fscroll-box');
let box = document.getElementById('scroll-box');
let dot = document.querySelectorAll('.testimonials .dots span');
let fdot = document.querySelectorAll('.features .dots span');

let posX = 0;

right.addEventListener('click', e => {
    if (posX <= 0) {
        posX = 0;
    }
    posX = posX + 500;
    box.scroll({

        left: posX,
        behavior: 'smooth'
    });

})
left.addEventListener('click', e => {
    if (posX >= 1500) {
        posX = 1500;
    }
    posX = posX - 500;
    box.scroll({

        left: posX,
        behavior: 'smooth'
    });
})


function addDot(i) {
    dot[i].addEventListener('click', e => {

        posX = i * 500;
        dot[0].classList.remove('active');
        dot[3].classList.remove('active');
        dot[2].classList.remove('active');
        dot[1].classList.remove('active');
        dot[i].classList.add('active');

        box.scroll({

            left: posX,
            behavior: 'smooth'
        });

    })
};
fright.addEventListener('click', e => {
    if (posX <= 0) {
        posX = 0;
    }
    posX = posX + 500;
    fbox.scroll({

        left: posX,
        behavior: 'smooth'
    });

})
fleft.addEventListener('click', e => {
    if (posX >= 1500) {
        posX = 1500;
    }
    posX = posX - 500;
    fbox.scroll({

        left: posX,
        behavior: 'smooth'
    });
})


function faddDot(i) {
    fdot[i].addEventListener('click', e => {

        posX = i * 500;
        fdot[0].classList.remove('active');

        fdot[1].classList.remove('active');
        fdot[i].classList.add('active');

        fbox.scroll({

            left: posX,
            behavior: 'smooth'
        });

    })
};

addDot(0);
addDot(1);
addDot(2);
addDot(3);
faddDot(0);
faddDot(1);

let ham = document.querySelector('.ham');
let link = document.querySelector('.links-mobile');
ham.addEventListener('click', () => {
    if (link.style.display == 'none') {
        link.style.display = 'block';
    }
    else {
        link.style.display = 'none';
    }
});

let email = document.getElementById('email');
let regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();


    if (!email.value.match(regexp)) {
        // on error, we get into the condition
        email.classList.add('error');
        // alert('Email is not correct');
        email.value = "Email is not correct";
        
    }
    else {
        // on error, we get into the condition
        email.classList.remove('error');
    }

})
