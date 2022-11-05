import './style.css';
import Helper from './helper';

const taskData = document.getElementById('mytaskinput');
document.getElementById('addtaskform').addEventListener('submit', (e) => {
  e.preventDefault();
  Helper.addTask(taskData.value);
  taskData.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  Helper.showTaskItems();
});