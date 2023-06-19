let photoshopButton = document.getElementById("photoshop");
let illustratorButton = document.getElementById("illustrator");
let figmaButton = document.getElementById("figma");
let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let photo4 = document.getElementById("photo4");

photoshopButton.onclick = function () {
    document.getElementById("project_titel").innerHTML = "Photoshop";
    photo1.innerHTML = '<img src="assets/ps-foto-1.png" class="img-2 col-12 col-md-8 p-md-5 mx-md-5" alt="ps-foto-1">';
    photo2.innerHTML = '<img src="assets/ps-foto-2.png" class="img-2 ms-md-4" alt="ps-foto-2">';
    photo3.innerHTML = '<img src="assets/ps-foto-3.png" class="img-3 me-md-5 pe-md-5" alt="ps-foto-3">';
    photo4.innerHTML = '<img src="assets/ps-foto-4.png" class="img-3 pe-lg-4 p-md-4 me-md-5" alt="ps-foto-4">';
};

illustratorButton.onclick = function () {
    document.getElementById("project_titel").innerHTML = "Illustrator";
    photo1.innerHTML = '<img src="assets/ai-foto-1.png" class="img-2 col-12 col-md-8 p-md-5 mx-md-5" alt="ai-foto-1">';
    photo2.innerHTML = '<img src="assets/ai-foto-2.png" class="img-4 col-12 col-md-7 col-lg-12 pt-md-5 px-0 py-md-4" alt="ai-foto-2">';
    photo3.innerHTML = '<img src="assets/ai-foto-3.png" class="img-4 px-0 pe-lg-4 p-md-4 me-md-5" alt="ai-foto-3">';
    photo4.innerHTML = '<img src="assets/banner.png" class="img-4 col-12 col-md-7 col-lg-12 pt-md-5 px-0 py-md-4" alt="ai-foto-4">';
};

figmaButton.onclick = function () {
    document.getElementById("project_titel").innerHTML = "Figma";
    photo1.innerHTML = '<img src="assets/fg-foto-1.png" class="img-2 col-12 col-md-8 p-md-5 mx-md-5" alt="ps-foto-1">';
    photo2.innerHTML = '<img src="assets/fg-foto-2.png" class="img-3 pe-lg-4 p-md-4 me-md-5" alt="fg-foto-2">';
    photo3.innerHTML = '<img src="assets/fg-foto-3.png" class="img-3 pe-lg-4 p-md-4 me-md-5" alt="fg-foto-3">';
    photo4.innerHTML = '<img src="assets/fg-foto-4.png" class="img-3 pe-lg-4 p-md-4 me-md-5" alt="fg-foto-4">';
};


document.getElementById("project_titel").style.color = "#fff";
document.getElementById("project_titel").style.fontSize = "60px";
document.getElementById("project_titel").style.fontFamily = "roboto-black";
document.getElementById("project_titel").style.fontWeight = "bold";

let i=0, text;

text= "Tuning"

function typing(){
    if(i<text.length){
     document.getElementById("text").innerHTML += text.charAt(i);
     i++
     setTimeout(typing,50);   
    }
}
typing();