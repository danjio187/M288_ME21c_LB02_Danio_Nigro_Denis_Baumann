function addNums(){
    let userInput = document.getElementById("userInput").value;
    let ziffer1 = parseInt(document.getElementById("ziffer1").innerHTML);
    let ziffer2 = parseInt(document.getElementById("ziffer2").innerHTML);
    let submitButton = document.getElementById("submitButton");
    let captchaCheckButton = document.getElementById("captchaCheck");
    let sum = ziffer1 + ziffer2;
    if(userInput == ""){
        alert("Bitte addieren Sie die Zahlen");
    }else if(userInput != sum){
        alert("Die Berechnung ist falsch");
    }else{
        document.getElementById("status").innerHTML = "Code ist korrekt";
        submitButton.disabled = false;
        submitButton.style.color = "red";
        captchaCheckButton.disabled = true;
        captchaCheckButton.style.color = "grey";
        submitButton.style.color = "green";
        userInput.style.color = "green";
        captchaCheckButton.style.color = "green";
        submitButton.style.color = "green";
    }
}

function randomNums(){
    let rand_num1 = Math.floor(Math.random() * 10) + 1;
    let rand_num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("ziffer1").innerHTML = rand_num1;
    document.getElementById("ziffer2").innerHTML = rand_num2;
}

const namensBegruessung = {
        "begin": "Hallo",
        "prefix": "Herr",
        "firstname":"Peter",
        "lastname":"Muster"
}

document.getElementById("begruessung").innerHTML = namensBegruessung.begin + ' ' + namensBegruessung.prefix + ' ' + namensBegruessung.firstname + ' ' + namensBegruessung.lastname;