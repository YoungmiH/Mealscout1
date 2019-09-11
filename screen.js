var page =0;
var video = document.querySelector("#videoElement");

function preload(){
}


function setup(){

  canvas = createCanvas(375,667);

}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
