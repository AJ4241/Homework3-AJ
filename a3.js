let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
//  alert("check")
//  document.querySelector(".table").classList.add("tr");
  if (numCols == 0) {
    numCols = numCols + 1;
  }
  let baseBody = document.getElementsByTagName("body")[0];
  let baseTable = document.getElementById("grid");
  let newRow = document.createElement("tr");
  let box = document.createElement("td");
  newRow.appendChild(box);
  baseTable.appendChild(newRow);
  baseBody.appendChild(baseTable);
  numRows = numRows+1;
/*
  let li = document.createElement("tr");
  let txt = document.createTextNode("four");
  li.appendChild(txt);
  document.querySelector("tr").appendChild(li);
*/
}
//Add a column
function addC() {
  if (numRows == 0) {
    addR();
  }
  else {
//    alert("Clicked Add Col")
    let baseBody = document.getElementsByTagName("body")[0];
//  let y = document.getElementsById("grid");
    for (let r = 0; r < numRows; r++) {
      let to = document.querySelectorAll("table tr")[r];
//    console.log(to);
      let so = document.createElement("td");
      to.appendChild(so);
    }
    numCols = numCols + 1;
  }
}

//Remove a row
function removeR() {
//    alert("Clicked Remove Row")
  let basebo = document.getElementsByTagName("body")[0];
  let doo = document.querySelectorAll("table tr")[numRows-1];
  let upp = document.getElementById("grid");
  upp.removeChild(doo);
  numRows = numRows-1;
//  console.log(doo);
}
//Remove a column
function removeC() {
//    alert("Clicked Remove Col")
//  console.log(numCols);
  let baseo = document.getElementsByTagName("body")[0];
  for (let e = 0; e < numRows; e++) {
    let uoo = document.querySelectorAll("table tr")[e];
    let lc = uoo.lastChild;
//    lc.style.backgroundColor = "pink";
    lc.remove();
//    console.log(lc);
  }
  numCols = numCols - 1;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
//    alert("Clicked Fill All")
  for (let y = 0; y < numRows; y++) {
    let goo = document.querySelectorAll("table tr")[y];
    let cee = goo.querySelectorAll("td");
    console.log(cee);
    for (let z = 0; z < goo.childElementCount; z++) {
  //      goo.querySelectorAll("td").style.backgroundColor = "pink";
      console.log(cee[z]);
      cee[z].style.backgroundColor = colorSelected;
    }
  /*
    for (let z = 0; z < goo.childElementCount; z++) {
  //      let zoo = document.querySelectorAll("table tr")[y];
  //      console.log(zoo);
  //      let fi = goo[z];
      goo[z].style.backgroundColor = "pink";
    }
  */
  }
}

function clearAll(){
//    alert("Clicked Clear All")
  for (let y = 0; y < numRows; y++) {
    let goo = document.querySelectorAll("table tr")[y];
    let cee = goo.querySelectorAll("td");
    console.log(cee);
    for (let z = 0; z < goo.childElementCount; z++) {
      console.log(cee[z]);
      cee[z].style.backgroundColor = "white";
    }
  }
}

function fillU(){
//    alert("Clicked Fill All Uncolored")
for (let y = 0; y < numRows; y++) {
  let goo = document.querySelectorAll("table tr")[y];
  let cee = goo.querySelectorAll("td");
  console.log(cee);
  for (let z = 0; z < goo.childElementCount; z++) {
//      goo.querySelectorAll("td").style.backgroundColor = "pink";
    console.log(cee[z]);
    if (cee[z].style.backgroundColor == "white") {
      console.log("worked");
    }
//    cee[z].style.backgroundColor = "pink";
  }
/*
  for (let z = 0; z < goo.childElementCount; z++) {
//      let zoo = document.querySelectorAll("table tr")[y];
//      console.log(zoo);
//      let fi = goo[z];
    goo[z].style.backgroundColor = "pink";
  }
*/
}
}