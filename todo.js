let btn = document.getElementById("addbtn");
let input = document.getElementById("todoInput");
let dueInput = document.getElementById("dueDateInput");
let outstandingList = document.getElementById("outstandingList");
let completedList = document.getElementById("completedList");
    
function addTodo() {
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
    listItem.classList.add("todo-item");

    //Wrap task text and due date in a span
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText + " (Due: " + dueDate + ") ";
    listItem.appendChild(taskSpan);
        
    //create done button
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");

    doneBtn.addEventListener("click", function(){
        //get current date for completion date
        let completionDate = new Date().toLocaleDateString();
        taskSpan.textContent = taskText + " (Due: " + dueDate + ", Completed: " + completionDate + ")";

        //Remove Done button and move to Completed List
        listItem.removeChild(doneBtn);
        completedList.appendChild(listItem);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function(){
            completedList.removeChild(listItem);
        });
        listItem.appendChild(deleteBtn);
 
    });

    listItem.appendChild(doneBtn)
    outstandingList.appendChild(listItem);

    //Clear inputs 
    input.value ="";
    dueInput.value ="";
}
//click event for Add button
btn.addEventListener("click", addTodo);

//Enter key functionality
input.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addTodo();
    }
});
