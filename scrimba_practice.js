
let firstBatch = 5
let secondBatch =3


let count = firstBatch + secondBatch

console.log(count)





let myAge = 23

console.log(myAge)





let davidage = 19
let humandogratio = 2

let mydogAge = 19 * 2

console.log(mydogAge)




let count = 5


count = count + 2

count = count + 10

console.log(count)




let variable = 50

console.log(variable)

variable = variable + 50
console.log(variable)

variable = variable - 75
console.log(variable)

variable = variable + 45
console.log(variable) 




let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0

function increment() {
    console.log("the botton was clicked")
    count = count + 1
    countEL.textContent = count 
}





let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save () {
    let countStr = count + " - "

    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0

console.log(count)
} 






let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0
function save() {
  console.log("the botton was clicked")
  count = count - 1
  countEL.innerText = count

}





function countdown() {

        console.log(5)
        console.log(4)
        console.log(3)
        console.log(2)
        console.log(1)

}

countdown()


countdown()  


function numbering () {

        console.log(42)

}

numbering ()


let lap1 = 34
let lap2 = 33
let lap3 = 36

function laptime(){
    let totallap = lap1 + lap2 + lap3
    console.log(totallap)

}

laptime()

let lapscompeted = 0

function totallapdone(){
    let totallap = lapscompleted + 1
}
lapscompleted ()
lapscompleted ()
lapscompleted ()


console.log(totallapdone)



let username = "samuel"
console.log(samuel)

let message = "you have three new notifications"
console.log(message +"," + username)

let messageToUser = message + ", " + username
console.log(messageToUser)




let name = samuel
console.log(samuel)

let greeting = "Hi my name is "
console.log(name + greeting)

let myGreeting = greeting + name
console.log(myGreeting)







let username = "samuel"
console.log(username)

let message = "you have three new mesage"
console.log(mesage + ", " + username)

let messageToUser = username + ", " + message
console.log(messageToUser)


let name = "samuel"
console.log(name)

let greeting = "Hi , my name is "
console.log(greeting)

let myGreeting = greeting + name
console.log(myGreeting)



let piont = 4
 let bonuspoint =  "10"

 let totalpoint = point + bonuspoint
 console.log(totalpoint)



 console.log(4 + 5) // 9
 console.log("2" + "4") // "24"
 console.log("5" + 1) // "51"
 console.log(100 + "100") // "100100"


 
let welcomeEl = document.getElementById(welcome-el)

let name = "samuel"

let greeting = "welcome back "

welcomeEl.innertext = greeting + name 

welcomeEl.innerText = welcomeEl.innerText + "@"
            or
welcomeEl.innerText += "@"





let firstname = "samuel"
let lastname = "olurotimi"

fullname = firstname + " " + lastname 
console.log(fullname)



let name = "linda"
let greeting = "Hi there"

// create a function that logs out "Hi there, linda!" when called

function greetlinda(){
    console.log(name + " " + greeting)

}
greetlinda





let myPoint = 3

// creat two function, add3points()and remove1point(), and have these
// add/remove points to/from the myPoint variable

function add3Points() {
    console.log(myPoint)
    myPoint = myPoint + 3

}
    function remove1point(){
    myPoint = myPoint - 1

    }
    add3Points()   
    add3Points()
    add3Points()
    remove1point()
    remove1point()


console.log(myPoint)



// try to predict what each of the lines will log out
console.log("2" + 2)// "22"
console.log(11 + 7)// 18
console.log(6 + "5")//"65"
console.log("My point: " + 5 + 9)// "My point: 59"
console.log(2 + 2)//4
console.log("11" + "14")// "1114"




// when the user clicks the user Button, render out
// "somthing went wrong try again" in the paragraph 
// that has the id = "error".
let errorparagraph = document.getElementById("error")
console.log(erroparagraph)

function clicked() {
    console.log("button clicked")
    errorParagraph.textContent = "something went wrong try again"

}






let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textcontent = num2


// Create four function: add(), subtract(), multiply(), divide()
// call the correct function when the user clicks on the correct button
// perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with the id-sum

// e.g if the user clicks on the plus button, you should Render
// "sum: 10" (since 8 + 2 = 10) inside the paragraph with the id="sum-el"

// FIRST OF ALL REMEMBER THIS FORYOUR SELF

// let sumEl = document.getElementById("sum-el")
// function add (){
//         sumEl.textContent = num1 + num2
// }


let sumEl = document.getElementById("sum-el")
function add (){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

let sumEl = document.getElementById('sum-el')
function subtract() {
        let result = num1 - num2
        sumEl.textcontent = "sum: " + result
}

let sumEl = document.getElementById("sumo-el")
function divide() {
    let result = num1 / num2
    sumEl.textContent = "sum: " + result 
}

let sumEl = document.getElementById("sum-el")
function multiply(){
    let result = num1 * num2
        sumEl.textcontent = "sum: " + result

}




// rough work practice

let add = document.getDocumentById("increment")
let add = document.getElementById('DECREMENT')

let int = document.getElementById("number")
let interger = 0

add.addeventlistner("click", function(){
        interger = interger + 1 ;
        int.innerHTML = interger;
})

add.addeventlistner("click", function(){
    interger = interger - 1 ;
    int.innerHTML = interger;
})










