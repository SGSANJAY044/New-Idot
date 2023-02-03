// window.addEventListener('scroll',()=>{
//   if(window.scrollY>3000){
//     document.getElementById("Z").style.fontSize=`${window.scrollY/10}px`
//     console.log(`${window.scrollY} haah`);
//     }
// })
// document.getElementById("Z").style.display='none'
// window.onscroll = function() {
//   var img = document.getElementById("WWD");
//   var x = window.pageXOffset;
//   img.style.left = x + "px";
// };
const zoomElement = document.querySelector(".zoom");
let zoom = 5;
const ZOOM_SPEED = 0.02;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        if (zoomElement.style.transform >= `scale(5)`) {
            console.log(`${window.scrollY()}`);
            return false;
        }
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  

    }else{    
        if (zoomElement.style.transform == `scale(1)`) {
            // console.log("minus");
            return false;
        }
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});
