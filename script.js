let imgList = Array.from(document.querySelectorAll('.inner img'));
let photo = document.querySelector('.photo');
let closeBtn = document.getElementById('closeBtn');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let Box = document.getElementById('Box');
let index;
for(let i = 0; i < imgList.length ; i++){
    imgList[i].addEventListener('click', function(e){
        var currentImg = e.target.getAttribute('src');
        photo.classList.remove('d-none');
        Box.style.backgroundImage = `url(${currentImg})`;
        index = imgList.indexOf(e.target)
    })
}

closeBtn.addEventListener('click', function(){
    closeSlide();
})

nextBtn.addEventListener ('click', function(){
    nextSlide();
})

prevBtn.addEventListener('click', function(){
    prevSlide();
})

function nextSlide(){
    index++;
    if(index == imgList.length){
        index = 0;
    }
    nextImg = imgList[index].getAttribute('src');
    Box.style.backgroundImage = `url(${nextImg})`;
}
function prevSlide(){
    index--;
    if(index < 0){
        index = imgList.length-1;
    }
    prevImg = imgList[index].getAttribute('src');
    Box.style.backgroundImage = `url(${prevImg})`;
}
function closeSlide(){
    photo.classList.add('d-none');
}

document.addEventListener('keydown',function(e){
    if(!photo.classList.contains('d-none')){
        if(e.key == "ArrowRight"){
        nextSlide()
        }else if (e.key == "ArrowLeft"){
            prevSlide() 
        }else if(e.key == "Escape"){
            closeSlide()
        }
    }
})
document.addEventListener('click', function(e){
    if(e.target == photo){
        closeSlide();
    }
})