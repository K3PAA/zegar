let myHour = document.querySelector("#Hour")
let myMinutes = document.querySelector("#Minutes")
let myDays =  document.querySelector("#Days")
let myMonth = document.querySelector("#Month")
let myYear = document.querySelector("#Year")
let mySeconds = document.querySelector("#seconds")



function currentDate(){
const date = new Date()

 let hour = date.getHours()
 let minutes = date.getMinutes()
 let seconds = date.getSeconds()
 let day = date.getDay()
 let month = date.getMonth() + 1
 let year = date.getFullYear()

 if(hour < 10){
    hour = "0"+hour
 }
 if(month < 10){
    month = "0"+month
 }
 if(seconds < 10){
    seconds = "0"+ seconds
 }
 if(minutes < 10){
    minutes = "0"+ minutes
 }


 myHour.textContent = hour +':'
 myMinutes.textContent = minutes + ':'
 mySeconds.textContent = seconds

 myDays.textContent = day + ":"
 myMonth.textContent = month + ":"
 myYear.textContent = year




}

setInterval(currentDate, 1000)