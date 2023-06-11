let photoshopButton = document.getElementById("photoshop");
let illustratorButton = document.getElementById("illustrator");
let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let photo4 = document.getElementById("photo4");

photoshopButton.onclick = function () {
    document.getElementById("project_titel").innerHTML = "Photoshop";
    photo1.innerHTML = '<img src="assets/ps-foto-1.png" class="d-flex img-fluid-2 ms-md-1" alt="ps-foto-1">';
    photo2.innerHTML = '<img src="assets/ps-foto-2.png" class="d-flex img-fluid-3 ms-md-4" alt="ps-foto-2">';
    photo3.innerHTML = '<img src="assets/ps-foto-3.png" class="d-flex img-fluid-3 me-md-5 pe-md-5" alt="ps-foto-3">';
    photo4.innerHTML = '<img src="assets/ps-foto-4.png" class="d-flex img-fluid-3 pe-lg-4 p-md-4 me-md-5" alt="ps-foto-4">';
};

illustratorButton.onclick = function () {
    document.getElementById("project_titel").innerHTML = "Illustrator";
    photo1.innerHTML = '<img src="assets/ai-foto-1.png" class="d-flex img-fluid-2 ms-md-1" alt="ai-foto-1">';
    photo2.innerHTML = '<img src="assets/ai-foto-2.png" class="d-flex img-fluid-3 pe-lg-4 p-md-5 me-md-5 alt="ai-foto-2">';
    photo3.innerHTML = '<img src="assets/ai-foto-3.png" class="d-flex img-fluid-3 pe-lg-4 p-md-4 me-md-5 alt="ai-foto-3">';
    photo4.innerHTML = '<img src="assets/Ai-foto-4.png" class="d-flex img-fluid-3 pe-lg-4 p-md-5 me-md-5" alt="ai-foto-4">';
};


let btncolor = document.getElementById("project_titel").style.color = "#fff";
let textSize = document.getElementById("project_titel").style.fontSize = "60px";
let textFont = document.getElementById("project_titel").style.fontFamily = "roboto-black";
let textWeight = document.getElementById("project_titel").style.fontWeight = "bold";