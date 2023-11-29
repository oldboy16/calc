var elInp = document.querySelector(".inp")
var elPiyoda1 = document.querySelector(".time1")
var elPiyoda2 = document.querySelector(".time2")
var elPiyoda3 = document.querySelector(".time3")
var elPiyoda4 = document.querySelector(".time4")

function calc(){
    elPiyoda1.textContent = elInp.value / 4
    elPiyoda2.textContent = elInp.value / 20
    elPiyoda3.textContent = elInp.value / 100
    elPiyoda4.textContent = elInp.value / 800
    elInp.value = ""
}







