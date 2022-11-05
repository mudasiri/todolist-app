import './style.css';

const tasks = [
  {
    id: '1',
    description: 'Bath the dogs',
    completed: false,
  },
  {
    id: '2',
    description: 'Ali Baaba',
    completed: false,
  },
  {
    id: '3',
    description: 'Mudasir Issah',
    completed: false,
  },

];

const showTasks = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((item) => {
    document.querySelector('.tasks').insertAdjacentHTML('beforeend', `<li> <div class="single-item"> <input type="checkbox"> ${item.description} <i class="fa-solid fa-ellipsis-vertical"></i></div></li><hr>`);
  });
};

showTasks();