

const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");
      
function addTask() {
  if(inputBox.value === '') {
    alert("Can`t add empty list!!")
  }

  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItems.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}

// listItems.addEventListner("click", function(e) {
//   if(e.target.tagName === "Li"){
//     e.target.classList.toggle("Checked");
//     saveData()
//   }

//   else if(e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//     saveData()
//   }
// }, false);
  
function saveData() {
  localStorage.setItem("data", listItems.innerHTML)
}
function showTask() {
  listItems.innerHTML = localStorage.getItem("data");
}
showTask();

