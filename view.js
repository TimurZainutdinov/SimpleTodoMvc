export default class View {
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTask(task);
        });
    }

	elements = {
		input: document.querySelector('#newTask'),
		form: document.querySelector('#form'),
		tasksList: document.querySelector('#tasksList'),
	};

	renderTask(taskObject) {
     
        let completeClass = taskObject.status === 'done' ? 'completed' : '';
        let checked = taskObject.status === 'done' ? 'checked' : '';

		const taskHTML = `  <li class="todo-item" data-id="${taskObject.id}">
                                <label class="todo-item-label">
                                    <input class="checkbox" type="checkbox" ${checked} />
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
                                </label>
                            </li>`;
        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML);
	}

    clearInput() {
        this.elements.input.value = '';
    }

    changeStatus(taskObject) {
        let taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
        let taskTextEl = taskElement.querySelector('span');

        if (taskObject.status === 'done') {
            taskTextEl.classList.add('completed');
        } else {
            taskTextEl.classList.remove('completed');
        }
    }

    removeTask(taskObject) {
        let taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
        taskElement.remove();
    }

}