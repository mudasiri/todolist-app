/** @jest-environment jsdom */
import Helper from './helper.js';

describe('Add new task', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
    <div class="task-list-area">
    <ul class="tasks" id="tasks">
    </ul>
    </div>
`;
  });

  test('Add new task object to local storage', () => {
    // Arrange
    const obj = {
      description: 'my new task item',
      index: 1,
      completed: false,
    };

    // Act
    const addTodoTaskSpy = jest.spyOn(Helper, 'addTask');
    Helper.addTask(obj.description);

    // Assert
    expect(addTodoTaskSpy).toHaveBeenCalledTimes(1);
    const result = JSON.parse(window.localStorage.getItem('todoListItems'));
    expect(result).toHaveLength(1);
  });

  test('Add two new objects to local storage', () => {
    // Arrange
    const dscOne = 'Going to work';
    const dscTwo = 'Find lunch';

    // Act
    const addTodoTaskSpy = jest.spyOn(Helper, 'addTask');
    Helper.addTask(dscOne);
    Helper.addTask(dscTwo);

    // Assert
    expect(addTodoTaskSpy).toHaveBeenCalledTimes(2);
    const result = JSON.parse(window.localStorage.getItem('todoListItems'));
    expect(result).toHaveLength(2);
    expect(result[0].description).toEqual(dscOne);
  });

  test('Add new task to UI', () => {
    // Arrange
    const dscOne = 'Going to work';

    // Act
    const addTodoTaskSpy = jest.spyOn(Helper, 'addTask');
    Helper.addTask(dscOne);

    // Assert
    expect(addTodoTaskSpy).toHaveBeenCalledTimes(1);
    const todoDiv = document.querySelector('.tasks');
    expect(todoDiv.innerHTML).toBeDefined();
  });
});

describe('Delete todo task', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
     <div class="task-list-area">
    <ul class="tasks" id="tasks">
    </ul>
</div>
  `;
  });

  test('Item to be deleted from local storage', () => {
    const obj = {
      description: 'new todo item',
      index: 1,
      completed: false,
    };
    window.localStorage.setItem('todoListItems', JSON.stringify([obj]));
    const id = 0;

    // Act
    const deleteTodoTaskSpy = jest.spyOn(Helper, 'deleteItem');
    Helper.deleteItem(id);
    const result = JSON.parse(window.localStorage.getItem('todoListItems'));

    expect(deleteTodoTaskSpy).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(0);
  });

  test('Check if the correct item to be deleted', () => {
    const objOne = {
      description: 'new todo item',
      index: 1,
      completed: false,
    };

    const objTwo = {
      description: 'Finish your work',
      index: 2,
      completed: false,
    };

    window.localStorage.setItem('todoListItems', JSON.stringify([objOne, objTwo]));
    const id = 0;

    // Act
    const deleteTodoTaskSpy = jest.spyOn(Helper, 'deleteItem');
    Helper.deleteItem(id);
    const result = JSON.parse(window.localStorage.getItem('todoListItems'));

    expect(deleteTodoTaskSpy).toHaveBeenCalledTimes(1);
    expect(result[0].index).toBe(1);
    expect(result).toHaveLength(1);

  });
});