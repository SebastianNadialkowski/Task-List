{
    const tasks = [
        {
            content: "testowy wpis",
            done: false,
        },
        {
            content: "testowy wpis zrobione",
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
        <li class="section__list__item">
          <button class="js-done button__done">${task.done ? "✔" : ""}</button>
          <p class="list__item ${task.done ? "section__list__item--done" : ""}">${task.content}</p>
          <button class="js-remove button__remove">🗑</button>
        </li>
          `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        removeTask();
    };

    function render() {
        addingListItem();

        taskDone();
    }

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