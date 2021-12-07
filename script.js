let input = document.getElementById("input");
let button = document.getElementById("button");
let myDiv = document.getElementById("myDiv");

button.addEventListener("click", ()=>{
    let test = input.value * 365 * 24;
    myDiv.innerHTML = "<br>" + input.value + " år = " + test + " timmar";
});

// function hours(){
//     let number = 1;
//     return number * 365 * 24;
// };

// myDiv.innerText = hours();




