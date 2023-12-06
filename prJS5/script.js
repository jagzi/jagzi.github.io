document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    loadTasks();

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && taskInput.value.trim() !== "") {
            addTask(taskInput.value.trim());
            taskInput.value = "";
        }
    });

    function addTask(text) {
        const timestamp = new Date().toLocaleString();
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${text} (${timestamp})</span>
            <span class="delete-btn" onclick="deleteTask(this)">❌</span> `;
        taskList.prepend(taskItem);

        // Save tasks to local storage
        saveTasks();
        updateListeners();
    }

    
    function updateListeners() {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener("change", function () {
                const taskItem = this.parentElement;
                taskItem.classList.toggle("completed");
                taskItem.removeChild(this);

                // Save tasks to local storage
                saveTasks();
            });

            const taskText = checkbox.nextElementSibling;
            taskText.addEventListener("dblclick", function () {
                editTask(this);
            });
        });
    }

    function editTask(taskText) {
        const text = taskText.innerText;
        const input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.className = "edit-input";

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                taskText.innerText = input.value;
                taskText.parentNode.removeChild(input);

                // Save tasks to local storage
                saveTasks();
            }
        });

        taskText.parentNode.insertBefore(input, taskText);
        input.focus();
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            taskList.innerHTML = savedTasks;
            updateListeners();
        }
    }
});

function deleteTask(deleteBtn) {
    const taskItem = deleteBtn.parentElement;
    taskList.removeChild(taskItem);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}