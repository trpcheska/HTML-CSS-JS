 var slide_index = 1;  
 var timer = null;

displaySlides(slide_index);  

function nextSlide(n) {  
    clearTimeout(timer); 
    displaySlides(slide_index += n); 

        }  
    
function currentSlide(n) {  
    clearTimeout(timer); 
    displaySlides(slide_index = n);  
        }  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide"); 
        if(n==undefined) {n = ++slide_index} 
        if (n > slides.length) { slide_index = 1 }  
        if (n < 1) { slide_index = slides.length }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
            }  
        slides[slide_index - 1].style.display = "block";  
        
        timer =  setTimeout(displaySlides, 2000);
        } 



