import Task from './task.js';

export default class Helper {
    static setLocalStorageList = (todo) => {
      localStorage.setItem('todoListItems', JSON.stringify(todo));
    }

    static getLocalStorageList = () => {
      let todoList;

      if (JSON.parse(localStorage.getItem('todoListItems')) === null) {
        todoList = [];
      } else {
        todoList = JSON.parse(localStorage.getItem('todoListItems'));
      }
      return todoList;
    }

    static reassignIndex = (todoList) => {
      todoList.forEach((item, i) => {
        item.index = i + 1;
      });
    }

    static updateTask = (newDsc, id) => {
      const toDoList = this.getLocalStorageList();
      const taskToUpdate = toDoList[id - 1];

      toDoList.forEach((item) => {
        if (item === taskToUpdate) {
          taskToUpdate.description = newDsc;
        }
      });
      this.setLocalStorageList(toDoList);
      this.showTaskItems();
    }

    static deleteItem = (id) => {
      let taskList = this.getLocalStorageList();
      const itemToDel = taskList[id];
      taskList = taskList.filter((item) => item !== itemToDel);
      this.reassignIndex(taskList);
      this.setLocalStorageList(taskList);
    }

    static addRemoveEvent = () => {
      document.querySelectorAll('.delete').forEach((icon) => icon.addEventListener('click', (e) => {
        e.preventDefault();
        const id = icon.id - 1;
        this.deleteItem(id);
        this.showTaskItems();
      }));
    }

    static setupEdit = (id) => {
      document.getElementById(`desc_${id}`).style.display = 'none';
      const editInput = document.getElementById(id);
      editInput.style.display = 'block';
      editInput.focus();
      editInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const id = Number(editInput.getAttribute('id'));
          this.updateTask(editInput.value, id);
          editInput.style.display = 'none';
          document.getElementById(`desc_${id}`).style.display = 'block';
        }
      });
    }

    static addEditEvent = () => {
      document.querySelectorAll('.edit').forEach((icon) => icon.addEventListener('click', (e) => {
        e.preventDefault();
        const { id } = icon;
        this.setupEdit(id);
      }));
    }

      static showTaskItems = () => {
        document.getElementById('tasks').replaceChildren();
        const tasks = this.getLocalStorageList();
        tasks.sort((a, b) => a.index - b.index);
        tasks.forEach((item) => {
          let currentStatus;
          let completedTask;

          if (item.completed === true) {
            currentStatus = 'checked';
            completedTask = 'is-completed';
          } else {
            currentStatus = '';
            completedTask = '';
          }
          document.querySelector('.tasks').insertAdjacentHTML('beforeend', `<li> <div class="single-item"> <input type="checkbox" ${currentStatus}> <h3 class="${completedTask}" id="desc_${item.index}"> ${item.description} </h3> <input class="editInput mytaskinput" id="${item.index}" value="${item.description}" hidden> </input> <div class="actions"> <i class="fa-solid fa-pen-to-square edit" id="${item.index}"></i> <i class="fa-solid fa-trash delete" id="${item.index}"></i> </div></div></li><hr>`);
        });
        this.addRemoveEvent();
        this.addEditEvent();
      };

    static addTask = (description) => {
      const todoList = this.getLocalStorageList();
      const index = todoList.length + 1;
      const newTask = new Task(index, description);

      todoList.push(newTask);
      this.setLocalStorageList(todoList);
      this.showTaskItems();
    }
}