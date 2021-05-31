Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90,
    constraints: { facingMode: "enviorment" }
});

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}