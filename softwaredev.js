// declare global variables
let checkedName = false;
let checkedEmail = false;
let checkedCard = false;
const DNgreen = '1px dotted #89c82e';
const DNpink = '1px solid #E70064';


function checkName() {
    checkedName = false
    document.getElementById("name").style.border=DNpink
    var nameOK = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
    var nameInput = document.getElementById("name").value;
    if (nameOK.test(nameInput)) {
        document.getElementById("name").style.border=DNgreen
        checkedName = true
    } 
}

function checkEmail() {
    checkedEmail = false
    document.getElementById("email").style.border=DNpink
    var nameOK = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    var nameInput = document.getElementById("email").value;
    if (nameOK.test(nameInput)) {
        document.getElementById("email").style.border=DNgreen
        checkedEmail = true
    }
}

function checkCardNumber() {
    checkedCard = false
    let number = document.getElementById("card").value;

    let multiplier = "2121212121212121";  // One more character added...
    let multipliedNumber;
    let sum = 0 // Initialise it as a number.

    document.getElementById("card").style.border=DNpink

    if (number.length === 16) {
            
        for (let count = 0; count < number.length; count++) { // Include last digit in loop
            multipliedNumber = number[count] * multiplier[count];
            if (multipliedNumber > 9) {
                // Use arithmetic to add the two digits
                multipliedNumber = multipliedNumber % 10 + Math.floor(multipliedNumber/10);
            }
            sum += multipliedNumber;
        }
        let check = sum % 10; // Simpler now because all digits were processed
        if (check === 0) { // Sum is multiple of 10
            document.getElementById("card").style.border=DNgreen
            checkedCard = true
        } 
    }
}

function validateForm(){
    if (checkedCard===true && checkedEmail===true && checkedName===true){
        window.location.href = "mailto:test@dn-uk.com"
    } 
}
