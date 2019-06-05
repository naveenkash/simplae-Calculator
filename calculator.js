var number = document.getElementsByClassName('num-group');
var operator = document.getElementsByClassName('operator');
var input = document.getElementById('input');
var answere = document.getElementById('answere');
var deleteEl = document.getElementById('delete');
var allcr = document.getElementById('allcr');
var decimal = document.getElementById('decimal');

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        event.preventDefault();
        showAns();
        console.log('keyup');

    }
})
// i added for loop on number class so i dont have to add event listener on every single number
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    element.addEventListener('click', function () {
        input.value += element.innerHTML;

    })
}
decimal.addEventListener('click', addDceimalSeperator);

function addDceimalSeperator() {
    var curStr = input.value;
    var lastElement = curStr;
    console.log(lastElement);
    // this is for to check the decimal if it exist after a operator  only limiting to one decimal
    for (let i = curStr.length - 1; i >= 0; i--) { // looping through every number in input 
        const element = curStr.charAt(i); //saving the charater of string 
        if (element === "+" || element === "-" || element === "/" || element === "*") {
            lastElement = curStr.substring(i + 1); // getting the part we need to check if there a decimal exist in it or not
            console.log('last element ' + lastElement);
            if (lastElement.includes('.')) {//ckecking is decimal exist in it
                return console.log('decimal found');
            } else {
                break;// breaking so it wont loop more 
            }
        }
    }
    // this is for to check if a decimal exist before a operator only limiting to one decimal
    if (lastElement.includes('.')) {
        console.log(lastElement);
        
        return console.log('decimal exist');
    }


    curStr += decimal.innerHTML;
    input.value = curStr;
}

// i added for loop on operator class so i dont have to add event listener on every single operator
for (let i = 0; i < operator.length; i++) {
    const element = operator[i];
    element.addEventListener('click', function () {
        var curSrting = input.value;
        var index = input.value.length - 1;
        //this is for if theres is no number in input it will not add a operator
        if (curSrting === '') {
            return;
        }
        // here we are checking a if there a operator already then exachange it with a new operator that just user clicked
        if (curSrting[index] === '/' || curSrting[index] === '+' || curSrting[index] === '-' || curSrting[index] === '*') {
            curSrting = curSrting.slice(0, -1);
        }
        curSrting += element.innerHTML;
        input.value = curSrting;

    });
}


answere.addEventListener('click', showAns);
// evaluating the answere by user
function showAns() {
    var ans = input.value;
    if (ans) {
        input.value = eval(ans);
        input.value = Math.floor(input.value * 1000) / 1000;
    }
};

// deleting number form the end of the input
deleteEl.addEventListener('click', function () {
    input.value = input.value.toString().slice(0, -1);
});
// clearing full input 
allcr.addEventListener('click', function () {
    input.value = '';
});