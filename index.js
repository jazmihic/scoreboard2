let home = document.getElementById("home-points")
let homePoints = 0
function homePlus1Point(){
    homePoints += 1
    home.textContent = homePoints
}
function homePlus2Point(){
    homePoints += 2
    home.textContent = homePoints
}
function homePlus3Point(){
    homePoints += 3
    home.textContent = homePoints
}
let guest = document.getElementById("guest-points")
let guestPoints = 0
function guestPlus1Point(){
    guestPoints += 1
    guest.textContent = guestPoints
}
function guestPlus2Point(){
    guestPoints += 2
    guest.textContent = guestPoints
}
function guestPlus3Point(){
    guestPoints += 3
    guest.textContent = guestPoints
}