/**
 * Функция передачи данных в родительское окно средствами iframe-resizer (https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/iframed_page/methods.md#sendmessagemessagetargetorigin).
 * @param {string} verb Verb из списка доступных (Verbs).
 * @param {any} info Дополнительная информация о событии.
 */
export function sendXApiMessage(verb, info = undefined) {
  if (!window.parentIFrame) {
    console.debug('[XAM]', { verb, info });
    return;
  }

  window.parentIFrame.sendMessage({ verb, info });
}
