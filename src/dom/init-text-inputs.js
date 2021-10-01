import { sendXApiMessage } from './send-x-api-message';
import { getClosestTaskNumber } from './get-closest-task-number';
import { Verbs } from '../constants';

/**
 * Обработка ввода ответов в текстовых полях.
 */
export function initTexInputs() {
  document
    .querySelectorAll('.task-answers input[type=text]')
    .forEach((input) => {
      const taskNumber = getClosestTaskNumber(input);

      input.addEventListener('focus', (evt) => {
        evt.target.dataset.oldValue = evt.target.value;
      });

      input.addEventListener('blur', (evt) => {
        const value = evt.target.value;
        const prevValue = evt.target.dataset.oldValue;

        if (prevValue === value) {
          return;
        }

        sendXApiMessage(Verbs.Answered, { step: taskNumber, value });
      });
    });
}
