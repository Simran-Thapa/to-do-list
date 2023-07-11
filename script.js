
    //for addbutton
    document.getElementById("add-button").addEventListener("click", function() {
      let addInput = document.getElementById("add-task");
      let addText = addInput.value.trim();
      
      if (addText !== "") {
        addTask(addText);
        addInput.value = "";
      }
    });

    //creating a function inorder to add a new task. 
    function addTask(taskText) {
      let taskList = document.getElementById("ui-list");

      //it will create new list
      let listItem = document.createElement("li");
      listItem.classList.add("todo-list");

     
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      listItem.appendChild(checkbox);

      // Create task text
      let taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;
      listItem.appendChild(taskTextElement);

      
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "Delete Now";
      listItem.appendChild(deleteButton);

      // Append the new task to the list
      taskList.appendChild(listItem);

      // Add event listener to checkbox
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          taskTextElement.style.textDecoration = "line-through";
        } else {
          taskTextElement.style.textDecoration = "";
        }
      });

      
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(listItem);
      });
    }
