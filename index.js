let secounds = document.getElementById('Secounds');
let minutes = document.getElementById('Minutes');
let hours = document.getElementById('Hours');
let days = document.getElementById('Days');

const countDown = () => {
let currDate = new Date();
let futureDate = new Date("1 Jan 2023");
let todayDate = futureDate-currDate;
days = Math.floor(todayDate/1000/60/60/24);
hours = Math.floor(todayDate/1000/60/60)%24;
minutes = Math.floor(todayDate/1000/60)%60;
secounds = Math.floor(todayDate/1000)%60;
document.getElementById('Days').innerHTML=days;
document.getElementById('Hours').innerHTML=hours;
document.getElementById('Minutes').innerHTML=minutes;
document.getElementById('Secounds').innerHTML=secounds;
}

countDown();
setInterval(countDown,1000);
