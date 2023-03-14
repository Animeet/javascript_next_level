var h1 = document.querySelector('h1');              //Creates a variable that targets all h1's but querySelector will stop at the first h1
var button = document.querySelector('button');
var body = document.body;                           // OR querySelector('body')  => only one body
var darkmodeActive = false;
var h3 = document.querySelector('h3');
var count = 10;

h1.innerText = 'JS Next Level';                     // CHANGES the h1 from 'Initial Text' to 'JS Next Level'


//Toggle between light mode and dark
//Create a variable that tracks if dark mode is active
//If variable is true, switch to light, else switch to dark

function setHeaderText() {
    h1.innerText = 'JS Next Level';
}



function toggleDarkMode() {
    if (darkmodeActive === false) {
        //switch to dark mode
        body.classList.add('darkmode');
        button.innerText = 'Light Mode';
        darkmodeActive = true;
    } else {
        //switch to light mode
        body.classList.remove('darkmode');
        button.innerText = 'Dark Mode';
        darkmodeActive = false;
    }
}


function countdown() {
    var timer = setInterval(function () {
        count--;
        h3.innerText = 'Count: ' + count;

        //check count and if equal to zero, clear interval
        if (count === 0) {
            clearInterval(timer);
            alert('Times up!')
        }
    }, 1000);
}



//On page load initialize event listeners and run
//any functions that need to process when the page
//first loads.
function onPageLoad() {
    setHeaderText();
    countdown();
    button.addEventListener('click', toggleDarkMode)
}

//Initialize our app
onPageLoad();




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




//clearInterval(timer) is clearing the Interval(stopping it in it's tracks) from the variable 'timer'
//setTimeout runs a program once, after the interval time
//setInterval is sort of like a loop, but continues indefinitely
//count-- will reduce the count 1 time per run
//count++ will increase the count 1 time per run
//callback = a function passed in as an argument value
//the 1000 is setting an interval of each run by 1000ms (1 sec)



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// body.classList.add('darkmode')
// This is adding a class in javascript that is already targeted elsewhere, without removing


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/*
function newStuff(num, str, callback) {
    callback('make me console out ...tricky tricky');
}

function someFunc(someVal) {
    console.log(someVal);
}

newStuff(10, 'some string', someFunc);
*/

