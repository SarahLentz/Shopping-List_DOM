/* 
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    console.log("CLICK!!!"); 
// }) 
*/ 

var button = document.getElementById("enter");
var input = document.getElementById("userinput"); 
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


function inputLength() {
    return input.value.length; 
}

function createListElement() {
    var li = document.createElement("li");  
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

// Create and append "Done!" button to list item to toggle "done" class (text-decoration: line-through);
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Done!"));
    li.appendChild(button);
    button.onclick=underlineParent;

// Create and append "Delete!" button to remove list items when clicked. 
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete!"));
    li.appendChild(button);
    button.onclick=removeParent;
}

// Function to toggle "done" class when "Done!" button is clicked -- and apply line-through text-decoration
function underlineParent(event) { 
    event.target.parentNode.classList.toggle("done");
}

// Function to delete list item when "Delete!" button is clicked.
function removeParent(evt) {
    evt.target.parentNode.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) { 
        createListElement(); 
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) { 
        createListElement();    
    }
}

button.addEventListener("click", addListAfterClick); 

input.addEventListener("keypress", addListAfterKeypress);

//                        ******* 
// Experiment: Create toggle button to toggle "done" class by button-click 
// or, individually, by clicking on list item.


// function toggleDoneClass() {
//     var li = document.querySelectorAll("li");
//     // First, try toggling the first item in the list: "Notebook" --> li[0].classList.toggle("done");
//     // li[0].classList.toggle("done"); // Success! 
//     for (var i=0; i < li.length; i++) {
//         li[i].classList.toggle("done");
//     }
// }

// function toggleDoneClass2() {
//     var listItem = document.querySelectorAll("li");
//     // for (var i = 0; i < li.length; i++) {
//     //     listItem[i].addEventListener("click", function() { listItem[i].classList.toggle("done")});
//     // }
//     // *** Why can't I get this for loop to work?

//     listItem[0].addEventListener("click", function() { listItem[0].classList.toggle("done")}) 
//     listItem[1].addEventListener("click", function() { listItem[1].classList.toggle("done")})
// }


// var toggle = document.getElementById("btn");
// toggle.addEventListener("click", toggleDoneClass);
// toggle.addEventListener("click", toggleDoneClass2);
// toggle.addEventListener("click", toggleDoneClass3);

// *** Using "contains", "remove", and "add" *** 

// function toggleDoneClass3() {
//     for (var i=0; i < li.length; i++) {
//         if (li[i].classList.contains("done")) {
//             li[i].addEventListener("click", function removeClass() { 
//                 li[i].classList.remove("done");
//             });
//         } else {
//             li[i].addEventListener("click", function addClass() { 
//                 li[i].classList.add("done");
//             }); 
//         }   
//     }
// }





// var toggle = document.getElementsByTagName("li"); 
// toggle.addEventListener("click", toggleDoneClass);  

// Steps & Questions: 
// * Need an event listener for when someone clicks on a list item. 
// * Do I need a for loop to isolate a specific index number for a set of existing list items?
// Example from StackOverflow: 
    // var All = document.querySelectorAll('.menu'); 
    // for (var i = 0; i < All.length; i++) { 
    //    All[i].classList.toggle('hidden-phone'); 
    // } 
