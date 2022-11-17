/** @jest-environment jsdom */
import Interactivity from './interactivity.js';
import Helper from './helper.js';

describe('', () => {
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
  test('Testing Clear all completed task function', () => {
    // Arrange
    Helper.addTask('new task 1');
    Helper.addTask('new task 2');
    Helper.addTask('new task 3');
    Helper.toggleCompleted(1, true);
    Helper.toggleCompleted(2, true);

    // Act
    const statusUpdateTaskSpy = jest.spyOn(Interactivity, 'deleteAllCompletedTasks');
    Interactivity.deleteAllCompletedTasks();
    const result = JSON.parse(window.localStorage.getItem('todoListItems'));

    // Assert
    expect(statusUpdateTaskSpy).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
  });
});