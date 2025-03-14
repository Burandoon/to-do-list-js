let tasks = [];
let input = document.getElementById("task-input");
let addTaskBtn = document.getElementById("list-form-btn");
let toDosList = document.getElementById("to-dos-list");

function createTask() {
    if (!input.value.replace(/\s+/, "").length) {
        return;
    }

    if (!tasks.includes(input.value)) {
        tasks.push(input.value);
        
        const newItem = document.createElement("li");
        
        newItem.classList.add("list-item");
        
        const newItemText = document.createElement("p");

        newItemText.setAttribute("class", "list-item-text");

        const btnsContainer = document.createElement("div");
        const completeBtn = document.createElement("img");

        completeBtn.setAttribute("id", "complete");
        completeBtn.setAttribute("class", "complete");

        const editBtn = document.createElement("img");

        btnsContainer.setAttribute("class", "btns-container");

        editBtn.setAttribute("id", "edit");

        const deleteBtn = document.createElement("img");

        deleteBtn.setAttribute("id", "delete");
        
        toDosList.append(newItem);
        newItem.append(newItemText, btnsContainer);
        btnsContainer.append(completeBtn, editBtn, deleteBtn);
        newItemText.append(input.value);
        completeBtn.src="icons/check.svg";
        editBtn.src = "icons/pencil.svg";
        deleteBtn.src = "icons/trash.svg";

        input.value = "";

        completeBtn.addEventListener("click", function(e) {
            newItemText.classList.toggle("crossout");
        })
    }
}

// Function for clicking on the "Add" button
function addTask() {
    addTaskBtn.addEventListener("click", function() {
        createTask();        
    })
}

// Event llistener for if the user pushes the "Enter" key instead of pressing/clicking the "Add" icon/button
input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        createTask();
    }
})

// Function calls
addTask();
