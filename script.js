let count = 0;
const countEl = document.getElementById("count-element")

// Increment fn
function add() {
    console.log("Add")
    count+= 1
    console.log(count)
    countEl.innerHTML = count
}

// Decrement fn
function sub() {
    console.log("Subtract")
    count-= 1
    console.log(count)
    countEl.innerHTML = count
}