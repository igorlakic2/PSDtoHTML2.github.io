let img = document.querySelector(".right");
let left1 = document.querySelector(".left1");
let left2 = document.querySelector(".left2");
let left3 = document.querySelector(".btns");

window.onload = () => {
    img.style.opacity = 1;
    img.style.right = '40px';

    left1.style.opacity = 1;
    left1.style.marginLeft = 0;

    left2.style.opacity = 1;
    left2.style.marginLeft = 0;

    left3.style.opacity = 1;
    left3.style.marginLeft = 0;
}

let course = document.querySelectorAll(".course");
let courseInfo = document.querySelectorAll(".courseInfo");

for(let i=0; i<course.length; i++){
    course[i].addEventListener('mouseover', () => {     
        courseInfo[i].style.opacity = 1;
        courseInfo[i].style.backgroundColor = 'white';
        courseInfo[i].style.width = '100%';
    });

    course[i].addEventListener('mouseout', () => {
        courseInfo[i].style.opacity = 0;
    });
}

