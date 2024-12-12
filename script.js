
// selecting ul
var ul = document.getElementById("task_container");
var inp = document.getElementById("inp");

function add(){

    var li = document.createElement("li");
    li.innerHTML = inp.value + "<button id='btn2' onclick='delete_item(event)'>Delete</button>" + "<button id='btn3' onclick='edit_item(event)'>Edit</button>";
    if (inp.value==''){
        alert("Cannot be Empty");
    }
    else{
        ul.append(li);
        inp.value ='';
    }

    
}


function delete_item(event){
    event.target.parentElement.remove();
}
// select the submit button
var submit = document.getElementById("btn4");

function edit_item(event){
    editingTask = event.target.parentElement; // Set editingTask to the clicked task
    txt_area.value = editingTask.firstChild.nodeValue.trim(); // Set textarea value to task text
    txt_area.style.display = "block"; // Show textarea
    submit.style.display = "block"; // Show submit button
}

function submit_item(){
    
    if (editingTask) {
        // Update the task text
        if (txt_area.value==''){
            alert("Cannot be Empty");
        }
        else{
            editingTask.firstChild.nodeValue = txt_area.value.trim(); 
            txt_area.style.display = "none"; // Hide textarea
            submit.style.display = "none"; // Hide submit button
            txt_area.value = ''; // Clear textarea
            editingTask = null; // Reset editingTask after submitting
        }
       
    }
}