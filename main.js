//https://teachablemachine.withgoogle.com/models/hekKCeNmQ/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#capturer");
function take_picture(){
    Webcam.snap(function (data_uri){
        document.getElementById("imageofface").innerHTML="<img id='captured_picture' src='"+data_uri+"'>";
    })
}
console.log("ml5 version: " + ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hekKCeNmQ/model.json", modelloaded);
function modelloaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("captured_picture")
    classifier.classify(img, gotresult)
}
function gotresult(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("face").innerHTML="Face :  "+results [0].label
        document.getElementById("accuracy").innerHTML="Accuracy :  "+results [0].confidence
    }
}