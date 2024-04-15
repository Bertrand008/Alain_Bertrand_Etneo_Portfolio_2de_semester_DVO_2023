// function printLetterByLetter(destination, message, speed){
//     let i = 0;
//
//     let interval = setInterval(function(){
//         document.getElementById(destination).innerHTML += message.charAt(i);
//         i++;
//         if (i > message.length){
//             clearInterval(interval);
//         }
//     }, speed);
// }
// printLetterByLetter("header_h1", "I am Alain B. Etneo", 100);

function printLetterByLetter(destination, message, speed) {
    let i = 0;
    let interval;

    function startPrinting() {
        i = 0;
        document.getElementById(destination).innerHTML = "";
        interval = setInterval(function () {
            document.getElementById(destination).innerHTML += message.charAt(i);
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                setTimeout(startPrinting, 5000); // Restart after 5 seconds
            }
        }, speed);
    }

    startPrinting();
}

// Call the function initially
printLetterByLetter("header_h1", "I am Alain B. Etneo", 100);
document.getElementById('header_h1').style.fontSize = '80px';
