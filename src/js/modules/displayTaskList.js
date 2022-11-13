/* eslint-disable import/prefer-default-export */
import checkBtnImg from '../../img/done.svg';
import deleteImg from '../../img/delete.svg';
import dragImg from '../../img/drag.svg';

export const displayTodo = (list) => {
  /* reset the inner content of the todo task list */
  const todoTastList = document.querySelector('.todo__list');
  todoTastList.innerHTML = '';

  /* Checking if task list is empty */
  if (list.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'task__list-emply';
    emptyMsg.innerText = 'Empty task list';
    todoTastList.appendChild(emptyMsg);
  } else {
    /* loop through the task array */
    list.forEach((task) => {
      /* create a task div */
      const taskDiv = document.createElement('div');
      taskDiv.className = 'todo__item';

      /* create a task check button */
      const taskCheckBtn = document.createElement('button');
      taskCheckBtn.className = 'todo__btn-check';

      /* create a task check button image */
      const taskCheckBtnImg = document.createElement('img');
      taskCheckBtnImg.src = checkBtnImg;
      taskCheckBtnImg.alt = 'to do completion icon';
      taskCheckBtnImg.className = 'todo__btn-img';

      /* create a task label */
      const taskLabel = document.createElement('label');
      taskLabel.className = 'todo__label';
      taskLabel.htmlFor = `todo__item-${task.index + 1}`;

      /* create the todo element using textarea */
      const todo = document.createElement('textarea');
      todo.className = 'todo';
      todo.name = 'todo_item';
      todo.id = `todo__item-${task.index + 1}`;
      todo.cols = '30';
      todo.rows = '1';
      todo.innerText = task.description;

      if (task.completed === true) {
        todo.classList.add('completed');
      }

      /* create a task delete button */
      const deleteBtn = document.createElement('img');
      deleteBtn.src = deleteImg;
      deleteBtn.alt = 'delete icon';
      deleteBtn.className = 'todo__btn-delete';

      /* create a task drag button */
      const dragBtn = document.createElement('img');
      dragBtn.src = dragImg;
      dragBtn.alt = 'drag icon';
      dragBtn.className = 'todo__btn-drag';

      /* add event listener to the textarea for focus */
      todo.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focus');
        event.target.nextElementSibling.classList.add('show');
      });

      /* add event listener to the textarea when not focus */
      todo.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focus');
        event.target.nextElementSibling.classList.remove('show');
      });

      /* add event listener to the check button */
      taskCheckBtn.addEventListener('click', () => {
        taskCheckBtn.classList.toggle('checked');
        taskCheckBtn.nextElementSibling.classList.toggle('completed');
        task.completed = !(task.completed);
      });

      /* adding event listener to textarea when focus */
      taskLabel.addEventListener('focusin', (event) => {
        const parenrtDiv = event.target.parentElement.parentElement;
        const dragBtnEl = event.target.nextElementSibling;
        const deleteBtnEl = event.target.parentElement.nextElementSibling;
        console.log(parenrtDiv);
        console.log(dragBtnEl);
        console.log(deleteBtnEl);
        parenrtDiv.classList.add('focus');
        dragBtnEl.classList.add('hide');
        deleteBtnEl.classList.add('show');
      });

      /* add event listener to the delete button */
      deleteBtn.addEventListener('click', (event) => {
        console.log('clciked');
        taskDiv.remove(event.target.parentElement);
      });

      /* adding event listener to textarea when not focus */
      taskLabel.addEventListener('focusout', (event) => {
        const parenrtDiv = event.target.parentElement.parentElement;
        const dragBtnEl = event.target.nextElementSibling;
        const deleteBtnEl = event.target.parentElement.nextElementSibling;
        console.log(parenrtDiv);
        console.log(dragBtnEl);
        console.log(deleteBtnEl);
        parenrtDiv.classList.remove('focus');
        //   dragBtnEl.classList.remove('hide');
        //   deleteBtnEl.classList.remove('show');
      });

      /* Appending elements to parents */
      taskCheckBtn.appendChild(taskCheckBtnImg);
      taskDiv.appendChild(taskCheckBtn);
      taskLabel.appendChild(todo);
      taskLabel.appendChild(deleteBtn);
      taskDiv.appendChild(taskLabel);
      taskDiv.appendChild(dragBtn);
      todoTastList.appendChild(taskDiv);
    });
  }
};