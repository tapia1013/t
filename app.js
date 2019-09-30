let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (event) => {
  event.preventDefault()
  // access user item and pass it to create function
  createItem(ourField.value);
})

//  create item to ul
function createItem(ofv) {
  //onclick to delete future items and know which item to delete with this
  let ourHTML = `<li>${ofv} <button onClick="deleteItems(this)">Delete</button></li>`
  // 2 arguements. first arguement is where in the element we want to add the new bit of content. the second content is the the HTML you want to add to this element
  ourList.insertAdjacentHTML("beforeend", ourHTML)

  // clear input field after adding task
  ourField.value = "";
  // no need to click on input again to start typing
  ourField.focus()
}

// in javascript there arent any delete buttons before its loaded so we cant get delete buttons with let delete = document.etcccc
// how to delete future items
// delete function

function deleteItems(elementToDelete) {
  // we want to fet rid of the entire bulleted list item
  elementToDelete.parentElement.remove()
}