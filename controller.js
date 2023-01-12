import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

// Adding a task
view.elements.form.addEventListener('submit', function (event) {

    event.preventDefault();
    let newTask = model.addTask(view.elements.input.value);
    view.renderTask(newTask);
    view.clearInput();
});

// Clicking on the checkbox or the delete button
view.elements.tasksList.addEventListener('click', function (event) {
    // Проверяем клик по чекбоксу
    if (event.target.getAttribute('type') === 'checkbox') {
        let id = event.target.closest('.todo-item').dataset.id;
        let task = model.findTask(id);
        model.changeStatus(task);
        view.changeStatus(task);
    }
    // Click on the delete button
    if (event.target.hasAttribute('data-delete')) {
        let id = event.target.closest('.todo-item').dataset.id;
        let task = model.findTask(id);
        model.removeTask(task);
        view.removeTask(task);
    }

});