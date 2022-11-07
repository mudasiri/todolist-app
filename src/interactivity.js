import Helper from './helper.js';

export default class Interactivity {
    static deleteAllCompletedTasks = () => {
      let taskList = Helper.getLocalStorageList();
      taskList = taskList.filter((item) => item.completed !== true);
      Helper.reassignIndex(taskList);
      Helper.setLocalStorageList(taskList);
      Helper.showTaskItems();
    }
}