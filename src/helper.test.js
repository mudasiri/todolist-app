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
    const dscOne = 'Go for a walk';
    const dscTwo = 'Find my Keys';

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
    const dscOne = 'Going to Gym';

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

    //Assert
    expect(deleteTodoTaskSpy).toHaveBeenCalledTimes(1);
    expect(result[0].index).toBe(1);
    expect(result).toHaveLength(1);
  });
});

// Testing update and clear all function
describe('Updating Task Items', () => {
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

    test('Edit single task Item description', () => {
        //Arrange
        Helper.addTask('new task 1');
        Helper.addTask('new task 2');
        Helper.addTask('new task 3');

        //Act
        const updateTaskSpy = jest.spyOn(Helper, 'updateTask');
        Helper.updateTask('New task 2 Edited',2);
        const result = JSON.parse(window.localStorage.getItem('todoListItems'));

        //Assert
    expect(updateTaskSpy).toHaveBeenCalledTimes(1);
    expect(result[1].description).toEqual('New task 2 Edited');

    });

    test('Update status of task', () => {
        //Arrange
        Helper.addTask('new task 1');
        Helper.addTask('new task 2');
        Helper.addTask('new task 3');

        //Act
        const statusUpdateTaskSpy = jest.spyOn(Helper, 'toggleCompleted');
        Helper.toggleCompleted(2,true);
        const result = JSON.parse(window.localStorage.getItem('todoListItems'));

         //Assert
    expect(statusUpdateTaskSpy).toHaveBeenCalledTimes(1);
    expect(result[2].completed).toBe(true);
    });

    test('Testing Clear all function', () => {
        
    })
})