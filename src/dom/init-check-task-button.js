import { sendXApiMessage } from './send-x-api-message';
import { Verbs } from '../constants';
import { checkDisplay, checkTask, findTask } from '../tasks';
import { getCurrentTaskNumber } from './state';

/**
 * Обработка нажатия кнопки «Проверить задание».
 */
export function initCheckTaskButton() {
  const button = document.getElementById('task-check');

  button.addEventListener('click', (evt) => {
    const taskNumber = getCurrentTaskNumber();
    const task = findTask(taskNumber);

    if (!task) {
      console.warn('[Task]', `Task#${taskNumber} not found.`);
      return;
    }

    sendXApiMessage(Verbs.Hinted, { step: taskNumber });

    const isCorrect = checkTask(task);

    checkDisplay(task, isCorrect);
  });
}
