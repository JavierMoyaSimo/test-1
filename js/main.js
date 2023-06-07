let date = new Date();

let currentDate =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
document.getElementById("currentDate").innerHTML = currentDate;

console.log(date);
console.log(currentDate);
