let btn = document.getElementById("addbtn");

btn.addEventListener("click", function(){
    let input = document.getElementById("todoInput");
    let dueInput = document.getElementById("dueDateInput");
    let outstandingList = document.getElementById("outstandingList");
    let completedList = document.getElementById("completedList");

    let taskText = input.value.trim(); //get clean input value
    let dueDate = dueInput.value; //get due date from the date input

    if (taskText==="") {
        alert("Please enter a task!");
        return;
    }

    if (dueDate === "") {
        alert("Please enter a due date!");
        return;
    }

    //create new list item
    let listItem = document.createElement("li");
    listItem.textContent= taskText + " (Due: " + dueDate + ") ";
    listItem.classList.add("todo-item");
    
    //create done button
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", function(){
        //get current date for completion date
        let completionDate = new Date().toLocaleDateString();
        listItem.textContent = taskText + "(Completed: " + completionDate +")";
        outstandingList.removeChild(listItem);
        completedList.appendChild(listItem);
        listItem.removeChild(doneBtn); //remove the done button after moving to completed list
    })

    listItem.appendChild(doneBtn)
    outstandingList.appendChild(listItem);

    //Clear inputs 
    input.value ="";
    dueInput.value ="";

});