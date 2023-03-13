{
  const tasks = [
      {
          content: "Jakieś zadanie",
          done: false,
      },
      {
          content: "Kolejne zadanie",
          done: true,
      },
  ];

  const taskDone = () => {
      const toggleDoneButtons = document.querySelectorAll(".js-done");

      toggleDoneButtons.forEach((toggleDoneButton, index) => {
          toggleDoneButton.addEventListener("click", () => {
              tasks[index].done = !tasks[index].done;

              render();
          })
      })
  }

  const removeTask = () => {
      const removeButtons = document.querySelectorAll(".js-remove");

      removeButtons.forEach((removeButton, index) => {
          removeButton.addEventListener("click", () => {
              tasks.splice(index, 1);

              render();
          });
      });
  };

  const addingListItem = () => {
      let htmlString = "";

      for (const task of tasks) {
          htmlString += `
            <li class="list__item ${task.done ? "list__item--done" : ""}">
            <button class="js-done button__done">Gotowe?</button>
            <button class="js-remove button__remove">Usuń</button>
            ${task.content}
            </li>
          `;
      }

      document.querySelector(".js-tasks").innerHTML = htmlString;

      removeTask();
  };

  const render = () => {
      addingListItem();

      taskDone();
  };

  const onFormSubmit = (event) => {
      event.preventDefault();

      addNewTask();
      formFocus();
  };

  const addNewTask = () => {
      const newTask = document.querySelector(".js-newTask");
      const newTaskContent = newTask.value.trim();

      if (newTaskContent === "") {
          return;
      }

      tasks.push({
          content: newTaskContent,
      });

      newTask.value = "";

      render();
  };

  const formFocus = () => {
      const form = document.querySelector(".js-newTask");

      form.focus();
  }

  const init = () => {
      render();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);
  };

  init();
}