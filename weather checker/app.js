let myInput = document.querySelector("#myInput");
let screenShow = document.querySelector("#myPara");
let form = document.querySelector("#weatherform");

form.addEventListener("submit", (event) =>{
event.preventDefault();  // prevent default sy page reload nhi hota


let temp = Number(myInput.value); // temperature

let condition = temp > 25;

if (condition) {
  screenShow.innerText = "Aj tou Garmi hai 🥵";

  console.log("garmi");
} else {
  screenShow.innerText = "Aj tou Sardi hai 🥶";

  console.log("sardi");
}

});