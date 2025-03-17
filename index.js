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
        newItemText.textContent = input.value;
        completeBtn.src="icons/check.svg";
        editBtn.src = "icons/pencil.svg";
        deleteBtn.src = "icons/trash.svg";

        input.value = "";

        completeBtn.addEventListener("click", function() {
            newItemText.classList.toggle("crossout");
        })

        editBtn.addEventListener("click", function() {
            if (newItemText.classList.contains("crossout")) {
                if (!confirm("It appears this task has been completed.  Do you still wish to edit?")) {
                    return;
                }
            }
            
            let taskUpdate = prompt("Update task", newItemText.textContent);

            if (!taskUpdate.replace(/\s+/, "").length) {
                return;
            }            

            if (taskUpdate !== null && tasks.includes(newItemText.textContent)) {
                if (tasks.indexOf(newItemText.textContent !== 1)) {
                    var index = tasks.indexOf(newItemText.textContent);
                    tasks[index] = taskUpdate;
                    newItemText.textContent = taskUpdate;
                }
            }
        })

        deleteBtn.addEventListener("click", function() {
            if (tasks.includes(newItemText.textContent)) {
                if (!newItemText.classList.contains("crossout")) {
                    if (confirm("It appears this task has not been completed.  Do you still wish to remove it?")) {
                        tasks = tasks.filter(task => task !== newItemText.textContent);
                        newItem.remove();
                    }
                }

                if (newItemText.classList.contains("crossout")) {
                    tasks = tasks.filter(task => task !== newItemText.textContent);
                    newItem.remove();
                }
            }
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
