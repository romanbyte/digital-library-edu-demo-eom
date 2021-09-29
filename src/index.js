// Подключение скрипта расчета размеров IFRAME, должен быть обязательно.
import 'iframe-resizer/js/iframeResizer.contentWindow';

// Подключение стилей
import './style.css';

import { Verbs } from './constants';
import {
  sendXApiMessage,
  initCheckTaskButtons,
  initRadioAndCheckboxInputs,
  initTabs,
  initTexInputs,
  waitForIframeResizer
} from './dom';

/**
 * Основная функция.
 */
window.addEventListener('load', () => {
  waitForIframeResizer(() => {
    initTabs();
    initRadioAndCheckboxInputs();
    initTexInputs();
    initCheckTaskButtons();

    sendXApiMessage(Verbs.Started);
    sendXApiMessage(Verbs.Launched, { step: 1 });
  });
});
