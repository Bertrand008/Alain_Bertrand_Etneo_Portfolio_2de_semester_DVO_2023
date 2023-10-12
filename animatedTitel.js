function printLetterByLetter(destination, message, speed){
    let i = 0;

    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}
printLetterByLetter("header_h1", "I am Alain B. Etneo", 100);