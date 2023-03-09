
document.getElementById('length').addEventListener('change', charLength)

/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}


let value = ""

let submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", getRange);

// let condition = false;

function getRange() {

    let rangeLength = document.getElementById("result").value

    upperCase = document.getElementById("uppercase").value
    lowerCase = document.getElementById("lowercase").value
    numberCase = document.getElementById("numbers").value


    if (upperCase !== false){
        includeUppercase = "true"
    }
    if(lowerCase !== false){
        includelowercase = "true"
    }
    if(numberCase !== false){
        includenumbercase = "true"
    }


    function generatePassword(rangeLength, includeUppercase, includelowercase, includenumbercase){

        uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
        numbercaseChars = "0123456789"

        let allchars = ""

        if(includeUppercase){
            allchars += uppercaseChars
        }

        if(includelowercase){
            allchars += lowercaseChars
        }

        if(includenumbercase){
            allchars += numbercaseChars
        }




    }




    // checkBoxUpper = document.querySelector('input[type=checkbox]:checked').value;





    // console.log(rangeLength);
    // console.log(checkBoxUpper)

    // let password = ""

    // if (checkBoxUpper !== false) {
    //     value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //     for (i = 1; i <= rangeLength; i++) {
    //         let randomNumber = Math.floor(Math.random() * value.length);
    //         password += value.substring(randomNumber, randomNumber + 1)
    //     }
    //     console.log(password);
    //     document.getElementById("password__result").value = password

    // }




}








