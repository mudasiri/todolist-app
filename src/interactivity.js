import Helper from './helper.js';

export default class Interactivity {
    static addCheckboxEvent = () => {
      document.querySelectorAll("input[type='checkbox']").forEach((box) => box.addEventListener('change', (e) => {
        console.log('i am in checkbox');
        const id = box.id - 1;
        let currentStatus;
        if (box.checked === true) {
          currentStatus = true;
        } else if (box.checked !== true) {
          currentStatus = false;
        }

        this.toggleCompleted(id, currentStatus);
      }));
    }

    static toggleCompleted = (id, currentStatus) => {
      const taskList = Helper.getLocalStorageList();
      taskList[id].completed = currentStatus;
      Helper.setLocalStorageList(taskList);
      Helper.showTaskItems();
    }

    static deleteAllCompletedTasks = () => {
      let taskList = Helper.getLocalStorageList();
      taskList = taskList.filter((item) => item.completed !== true);
      Helper.reassignIndex(taskList);
      Helper.setLocalStorageList(taskList);
      Helper.showTaskItems();
    }
}