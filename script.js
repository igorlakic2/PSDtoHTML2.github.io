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


let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");

const achievementCounter = (id, start, end, duration) => {
    let cur = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(() => {
        cur += increment;
        obj.innerHTML = cur;
        if(cur == end){
            clearInterval(timer);
        }
    }, stepTime);

}

let achievement = document.querySelector(".achievement2");
let counter = 0;

window.addEventListener('scroll', () => {
    let elementPosition = achievement.offsetTop + 65;
    let fromTop = window.pageYOffset + window.innerHeight;

    if(counter == 0){
        if(fromTop > elementPosition) {
            achievementCounter('s1', 0, 890, 200);
            achievementCounter('s2', 0, 670, 500);
            achievementCounter('s3', 0, 160, 1000);
            achievementCounter('s4', 0, 200, 900);
            counter++;
        }
    }
})

let images = document.querySelectorAll('.galleryImg');
let content = document.querySelectorAll('.galleryContent');
let thumb = document.querySelectorAll('.galleryThumb');
let index = 1;

const slider = (n) => {
    if(n > images.length) { index = 1; }
    if(n < 1) { index = images.length; }

    for(let i=0; i<images.length; i++){
        images[i].style.display = 'none';
        content[i].style.display = 'none';
        //thumb[i].style.opacity = 0.5;
    }

    images[index-1].style.display = 'block';
    content[index-1].style.display = 'block';
    //thumb[index-1].style.opacity = 1;
}

slider(index);

const nextSlide = (n) => {
    slider(index += n);
}
const prevSlide = (n) => {
    slider(index += n);
}
const currentSlide = (n) => {
    slider(index = n);
}