import './style.css';
import Interactivity from './interactivity.js';
import Helper from './helper.js';

const taskData = document.getElementById('mytaskinput');
document.getElementById('addtaskform').addEventListener('submit', (e) => {
  e.preventDefault();
  Helper.addTask(taskData.value);
  taskData.value = '';
});

// listen on clear all tab
document.getElementById('foot').addEventListener('click', () => {
  Interactivity.deleteAllCompletedTasks();
});

// load tasks and add listeners to checkbox
window.addEventListener('DOMContentLoaded', () => {
  Helper.showTaskItems();
});