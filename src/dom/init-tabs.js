import { sendXApiMessage } from './send-x-api-message';
import { Verbs } from '../constants';

/**
 * Обработка переходов между заданиями.
 */
export function initTabs() {
  document.querySelectorAll('#tasks-tabs button').forEach((button) => {
    button.addEventListener('hide.bs.tab', (evt) => {
      const taskNumber = Number(evt.target.dataset.taskNumber);

      sendXApiMessage(Verbs.Passed, { step: taskNumber });
    });

    button.addEventListener('shown.bs.tab', (evt) => {
      const taskNumber = Number(evt.target.dataset.taskNumber);

      sendXApiMessage(Verbs.Launched, { step: taskNumber });
    });
  });
}
