// Подключение скрипта расчета размеров IFRAME, должен быть обязательно.
import 'iframe-resizer/js/iframeResizer.contentWindow';

// Подключение стилей
import './style.css';

import { Verbs } from './constants';
import {
  sendXApiMessage,
  initCheckTaskButton,
  initRadioAndCheckboxInputs,
  initTabs,
  initTexInputs,
  waitForIframeResizer,
  initCompleteEomButton
} from './dom';

/**
 * Основная функция.
 */
window.addEventListener('load', () => {
  waitForIframeResizer(() => {
    initTabs();
    initRadioAndCheckboxInputs();
    initTexInputs();
    initCheckTaskButton();
    initCompleteEomButton();

    sendXApiMessage(Verbs.Started);
    sendXApiMessage(Verbs.Launched, { step: 1 });
  });
});
