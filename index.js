let homeScoreEl = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let count = 0;
let countGuest = 0;

function setInitialValue(){
    homeScoreEl.innerHTML = count;
    guestScore.innerHTML = countGuest;
}

setInitialValue();

function addOne(){
    count += 1
    homeScoreEl.textContent = count;
}

function addTwo(){
    count += 2
    homeScoreEl.textContent = count;
}

function addThree(){
    count += 3
    homeScoreEl.textContent = count;
}

function addOneGuest(){
    countGuest += 1
    guestScore.textContent = countGuest;
}

function addTwoGuest(){
    countGuest += 2
    guestScore.textContent = countGuest;
}

function addThreeGuest(){
    countGuest += 3
    guestScore.textContent = countGuest;
}

function resetHomeScore(){
    count = 0;
    homeScoreEl.textContent = count;
}

function resetGuestScore(){
    count = 0;
    guestScore.textContent = count;
}