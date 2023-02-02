// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$(".zoom").css({
// 		backgroundSize: (100 + scroll/15)  + "%",
// 		top: -(scroll/10)  + "%",

// 	});
  
// });
window.onscroll = function() {
  var img = document.getElementById("WWD");
  var x = window.pageXOffset;
  img.style.left = x + "px";
};