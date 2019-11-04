var canvas_big, canvas_query, imcanvas_big, imcanvas_query;
var imbig;var imquery;

// document.addEventListener("DOMContentLoaded", function(){
//     var btn = document.getElementById("locate");
//     btn.addEventListener("click", template_match);
//
// }, false);

//
// function template_match(){
//     console.log("template matching using features");
//     var im_big = imcanvas_big.getImageData(0, 0, canvas_big.width, canvas_big.height);
//     var cd_big = getdescriptors(im_big.data, canvas_big.width, canvas_big.height);
//     console.log(cd_big);
//     var matches = getNearestMatch(cd_big);
//     plot_matches(matches);
// }
//
//
// function getNearestMatch(cd1, cd2){
//     var matches = tracking.Brief.reciprocalMatch(cd1[0], cd1[1], cd2[0], cd2[1]);
//     matches.sort(function(a, b){
//        return  b.confidence - a.confidence;
//     });
//     console.log(matches);
//     return matches;
// }


// function plot_matches(matches){
//     console.log("plotting matches");
//     for (var i = 0; i < matches.length; i++) {
//         var color = "red";
//         imcanvas_big.lineWidth = "2px";
//         imcanvas_big.fillStyle = color;
//         imcanvas_big.strokeStyle = color;
//         imcanvas_big.beginPath();
//         imcanvas_big.arc(matches[i].keypoint1[0], matches[i].keypoint1[1], 4, 0, 2*Math.PI);
//         imcanvas_big.stroke();
//     }

//}

// function getdescriptors(im, w, h){
//     var blur_im = tracking.Image.blur(im, w, h, 3);
//     var gray_im = tracking.Image.grayscale(blur_im, w, h);
//     var corners = tracking.Fast.findCorners(gray_im, w, h);
//     var desc = tracking.Brief.getDescriptors(gray_im, w, corners);
//     return [corners, desc];
// }

// var myTracker = new tracking.Tracker('target');
//
// myTracker.on('track', function(event) {
//   if (event.data.length === 0) {
//     // No targets were detected in this frame.
//   } else {
//     event.data.forEach(function(data) {
//       // Plots the detected targets here.
//       trackerTask.stop();
//     });
//   }
// });
//
// var trackerTask = tracking.track('#myVideo', myTracker);






window.onload = function(){
   blurRadius = 1.1;
    canvas_big = document.getElementById("big_canvas");
    imcanvas_big = canvas_big.getContext("2d");
    imbig = new Image();
    imbig.crossOrigin = "Anonymous";
    imbig.src = "images/temA1.jpg"
    imbig.width = 275;
    imbig.height = 183;
    canvas_big.width = imbig.width;
    canvas_big.height = imbig.height;
    imbig.onload = function(){
    imcanvas_big.drawImage(imbig, 0, 0);
      var imageData1 = imcanvas_big.getImageData(0, 0, canvas_big.width, canvas_big.height);
      var gray1 = tracking.Image.grayscale(tracking.Image.blur(imageData1.data, canvas_big.width, canvas_big.height, blurRadius), canvas_big.width, canvas_big.height);
      var corners1 = tracking.Fast.findCorners(gray1, canvas_big.width, canvas_big.height);
      var descriptors1 = tracking.Brief.getDescriptors(gray1, canvas_big.width, corners1);

console.log(descriptors1);
    };
};


// var myTracker = new tracking.Tracker('target');





     // var myTracker = new MyTracker();
     // console.log(myTracker);
     // console.log(myTracker);
