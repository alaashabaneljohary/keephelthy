let loader = document.getElementById('preloader')
function myFunction(){
    loader.style.display = "none";
}
window.onload = myFunction;
setInterval(myFunction, 90000) ;


// Scroll Navbar
let myNavbar = document.getElementById('navbar') ;

function scrollTop()
{
    if(window.scrollY > 1000)
    {
        myNavbar.style.background = "#EEEEEE" ;
    } 
    else {
        myNavbar.style.background = '#fff' ;
    }
}
window.onscroll = scrollTop ;

// Slider Images 
let sliderImages  = document.getElementById('sliderImages');
let myImageSlider = [
    'url(images/slider/slide_4.jpg)',
      'url(images/slider/slide2-1.jpg)',
      'url(images/slider/slide3-1.jpg)'
] ;
let counter = 0 ;
function changeImageBg() 
{
    sliderImages.style.backgroundImage = myImageSlider[counter];
    counter = counter +1 ;
    if(counter > myImageSlider.length) 
    {
        counter = 0 ;
    }
}

setInterval (changeImageBg , 3000)

// Capition Section

let caption = document .getElementById("caption") ;
let myCaption = " ";
for(let i = 0 ; i < 1 ; i++)
{
    myCaption+=`
            <h1 class="fw-bold text-light display-5 mb-3">
            Exceptional Service with Soft and Gentle Hands 
            </h1>
            <p class="text-light text-capitalize w-75 text-fonts ">
            whitening is among the most popular dental procedures because it can greatly improve how your teeth look.
            </p>
            <a href="index.html" class="btn btn-c-1" > view our services</a>
           ` ;
           
}; caption.innerHTML = myCaption;

// Section Meet 

let sectionMeet = document.getElementById('sectionMeet') ;
let meetContent = " ";

for(var i = 0 ; i < 1 ; i++)
{
    meetContent += `
            <div class="col-md-6 item-left">
            <img src="images/team/robert.png" class="w-100" alt="">
            </div>
            <div class="col-md-6 item-right ms-md-5">
            <h3>Meet <span class="text-fonts">Dr. Robert</span> </h3>
            <p class="fw-bold">
                Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis
            </p>
            <p class="text-muted text-fonts">
                et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et 
                quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit 
                volu ptatem accusantium dolore mque. Totam rem aperiam, eaque ipsa quae
                ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque
                ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis
                    iste natus error sit volu ptatem accusantium dolore mque iste natus error 
                    sit volu ptatem accusantium dolore mque. Totam rem aperiam, eaque ipsa quae ab 
                    illo invent ore veritatis.
            </p>
            <img src="images/logo/sign.png" alt="">
            </div>     
     
    `;
}; sectionMeet.innerHTML = meetContent ;

let sectionSuccess = document.getElementById('section-success') ;
let sectionSuccessContent = " " ;

for(let i = 0 ; i < 1; i++)
{
    sectionSuccessContent+=`
                <div class="col">
                <div class="row justify-content-between">
                <div class="col-md-9 ">
                    <h4 class="text-fonts fw-bold">Teeth Whitening</h4>
                    <p class="text-muted">
                    Ritae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque. Totam rem aperiam ritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.
                    </p>
                </div>
                <div class="col-md-3 ">
                    <img src="images/blog/befor.jpg" class="w-100 mb-4" alt="">
                </div>
                <div class="col-md-9">
                    <p class="text-muted">
                    Ritae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque. Totam rem aperiam ritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.
                    </p>
                </div>
                <div class="col-md-3 ">
                    <img src="images/blog/after.jpg" class="w-100" alt="">
                </div>
                </div>
                </div>
    `;
}
sectionSuccess.innerHTML = sectionSuccessContent ;

let carouselInner = document.getElementById('carousel-inner') ;
let carouselInnerContent = ' ' ;

for(var i = 0 ; i < 3 ; i++)
{
    carouselInnerContent+=`
    <div class="carousel-item active">
    <div class="row">
      <div class="col-lg-6 mb-2 ">
        <div class="testimonial-box">
          <div class="client-details d-flex ">
           <a href="#">
            <img src="images/icon/quote1.png" alt="">
           </a>
            <p class="ms-3 text-fonts ">Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.</p>
          </div> 
        </div>
        <div class="d-flex mt-5 ms-4">
          <img src="images/testimonials/user_1.jpg" class="rounded rounded-5 " alt="">
          <div class="ms-3">
            <h4 class="text-white text-capitalize fs-6">alex ryker</h4>
          <h6 class="text-fonts text-warning text-uppercase">canda...</h6>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-2 ">
        <div class="testimonial-box">
          <div class="client-details d-flex ">
           <a href="#">
            <img src="images/icon/quote1.png" alt="">
           </a>
            <p class="ms-3 text-fonts ">Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.</p>
          </div> 
        </div>
        <div class="d-flex mt-5 ms-4">
          <img src="images/testimonials/user_2.jpg" class="rounded rounded-5 " alt="">
          <div class="ms-3">
            <h4 class="text-white text-capitalize fs-6">merry james</h4>
          <h6 class="text-fonts text-warning text-uppercase">england...</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
    ` ;
}
carouselInner.innerHTML = carouselInnerContent ; 

let contactForm = document.getElementById('contactForm') ;
let contactFormContent = " " ;

for(var i = 0 ; i < 1 ; i++)
{
    contactFormContent+=`
    <div class="col-md-6 py-3">
      <input type="text" placeholder="  First Name" class="form-control " required>
    </div>
    <div class="col-md-6 py-3">
      <input type="text" placeholder="  Last Name" class="form-control" required>
    </div>
    <div class="col-md-6 py-3">
      <input type="email" placeholder="  Email" class="form-control" required>
    </div>
    <div class="col-md-6 py-3">
      <input type="date" placeholder="  Date" class="form-control" required>
    </div>
    <div class="col-md-6 py-3">
      <input type="number" placeholder="  Phone" class="form-control" required>
    </div>
    <div class="col-md-6 py-3">
      <input type="time" placeholder="  Time" class="form-control" required>
    </div>
    `;
}
contactForm.innerHTML = contactFormContent ;

