
let itemImg =Array.from(document.querySelectorAll('.item img'));
let lightBoxItem = document.getElementById('lightBoxItem');
let closeBtn = document.getElementById('closeBtn');
let lightBoxImage = document.getElementById('lightBoxImage');
let nextBtn = document.getElementById('rightBtn');
let prevBtn = document.getElementById('leftBtn');
let curontSliderImg ;

for(let i=0 ; i < itemImg.length ; i++){
    itemImg[i].addEventListener('click' , function(e){
        lightBoxItem.style.display = 'flex';
       let clickedImg = e.target;
         curontSliderImg =   itemImg.indexOf(e.target);
       let imgSrc = clickedImg.getAttribute('src');
       lightBoxImage.style.backgroundImage = `url(${imgSrc})`;

    });
};

function nextSlide(){
    curontSliderImg = curontSliderImg+1;
    if(curontSliderImg == itemImg.length){
        curontSliderImg = 0;
    }
   
    let imgSrc = itemImg[curontSliderImg].src;
    lightBoxImage.style.backgroundImage = `url(${imgSrc})`;

} 
nextBtn.addEventListener('click' , nextSlide);

function prevSlide(){
    curontSliderImg = curontSliderImg-1;
    if(curontSliderImg < 0 ){
        curontSliderImg = itemImg.length -1
    }

   
    let imgSrc = itemImg[curontSliderImg].src;
    lightBoxImage.style.backgroundImage = `url(${imgSrc})`;

} 
prevBtn.addEventListener('click' ,function(){ prevSlide() });


closeBtn.addEventListener('click' , function(){
    lightBoxItem.style.display = 'none';
});

