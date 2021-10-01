import { sendXApiMessage } from './send-x-api-message';
import { getClosestTaskNumber } from './get-closest-task-number';
import { Verbs } from '../constants';
import { checkDisplay, checkTask, findTask } from '../tasks';

/**
 * Обработка нажатия кнопок «Проверить задание».
 */
export function initCheckTaskButtons() {
  document.querySelectorAll('.task-check').forEach((button) => {
    const taskNumber = getClosestTaskNumber(button);
    const task = findTask(taskNumber);

    if (!task) {
      console.warn('[Task]', `Task#${taskNumber} not found.`);
      return;
    }

    button.addEventListener('click', (evt) => {
      sendXApiMessage(Verbs.Hinted, { step: taskNumber });

      const isCorrect = checkTask(task);

      checkDisplay(task, isCorrect);
    });
  });
}
