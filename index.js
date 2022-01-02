// //write a variable that contains the string "hello world"
// const hello="Hello World "
// const name="Aaiden"
// //print that variable to the screen
// //console.log(hello+name)

// function greeting(name){
//     console.log("Welcome, Traveler. Your name is "+name)
// }

// greeting("Koda")


window.addEventListener('DOMContentLoaded', (event) => {
    const namebtn = document.getElementById('namebtn')
    namebtn.addEventListener('click', function(){
        const name = document.getElementById('name').value
        addToDiv(name)
    })
    function addToDiv(text){
        const greeting = document.getElementById("greeting")
        greeting.innerHTML = "Welcome, Traveler. Your name is " +text
    }
})