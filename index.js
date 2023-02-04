window.addEventListener('scroll',()=>{
  if(window.scrollY>1000){
    document.getElementById("WWD1").style.top=`${3100-(window.scrollY)}px`
    console.log(`${window.scrollY} haah`);
    }
  if(window.scrollY>3150 && window.scrollY<3350){
    document.getElementById("WWD-EH1").style.top=`${(window.scrollY)-3150}px`
    // document.getElementById("WWD-EH1").style.position="fixed"
    // document.getElementById("WWD-EH1").style.top="3100";
  }
  if(window.scrollY>3000){
    document.getElementById("WWD2").style.top=`${4100-(window.scrollY)}px`
    console.log(`${window.scrollY} haah`);
    }
  if(window.scrollY>4150 && window.scrollY<4450){
    document.getElementById("WWD-EH2").style.top=`${(window.scrollY)-4150}px`
  }
  if(window.scrollY>3000){
    document.getElementById("WWD3").style.top=`${5000-(window.scrollY)}px`
    console.log(`${window.scrollY} haah`);
    }
  if(window.scrollY>5150 && window.scrollY<5350){
    document.getElementById("WWD-EH3").style.top=`${(window.scrollY)-5150}px`
  }
  if(window.scrollY>3000){
    document.getElementById("WWD4").style.top=`${6000-(window.scrollY)}px`
    console.log(`${window.scrollY} haah`);
    }
  if(window.scrollY>6150 && window.scrollY<6350){
    document.getElementById("WWD-EH4").style.top=`${(window.scrollY)-6150}px`
  }
  if(window.scrollY>3000){
    document.getElementById("WWD5").style.top=`${7000-(window.scrollY)}px`
    console.log(`${window.scrollY} haah`);
    }
  if(window.scrollY>7150 && window.scrollY<7350){
    document.getElementById("WWD-EH5").style.top=`${(window.scrollY)-7150}px`
  }
})
// document.getElementById("Z").style.display='none'
// window.onscroll = function() {
//   var img = document.getElementById("WWD");
//   var x = window.pageXOffset;
//   img.style.left = x + "px";
// };
const zoomElement = document.querySelector(".zoom");
let zoom = 5;
const ZOOM_SPEED = 0.02;

// document.addEventListener("wheel", function(e) {  
    
//     if(e.deltaY > 0){    
//         if (zoomElement.style.transform >= `scale(5)`) {
//             console.log(`${window.scrollY(  )}`);
//             return false;
//         }
//         zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  

//     }else{    
//         if (zoomElement.style.transform == `scale(1)`) {
//             // console.log("minus");
//             return false;
//         }
//         zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

// });
