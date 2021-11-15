import { sendXApiMessage } from './send-x-api-message';
import { Verbs } from '../constants';

/**
 * Обработка нажатия кнопки «Завершить».
 */
export function initCompleteEomButton() {
  const button = document.getElementById('eom-complete');

  button.addEventListener('click', (evt) => {
    sendXApiMessage(Verbs.Completed);
  });
}
