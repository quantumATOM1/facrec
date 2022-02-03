Webcam.set({
height:350,
width:350,
image_format : 'png',
png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach('#camera')

function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-Q9XxdYa0/model.json",modelloaded)
function modelloaded(){
    console.log("modelloaded")
}