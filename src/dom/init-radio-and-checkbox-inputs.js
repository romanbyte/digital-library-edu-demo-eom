import { sendXApiMessage } from './send-x-api-message';
import { getClosestTaskNumber } from './get-closest-task-number';
import { Verbs } from '../constants';

/**
 * Обработка выбора радио-кнопок и чекбоксов.
 */
export function initRadioAndCheckboxInputs() {
  document
    .querySelectorAll(
      '.task-answers input[type=radio], .task-answers input[type=checkbox]'
    )
    .forEach((input) => {
      input.addEventListener('change', (evt) => {
        const value = evt.target.value;
        const taskNumber = getClosestTaskNumber(evt.target);

        sendXApiMessage(Verbs.Answered, { step: taskNumber, value });
      });
    });
}
