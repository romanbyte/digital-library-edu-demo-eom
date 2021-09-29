/**
 * Функция ожидания готовности iframe-resizer'а.
 */
export function waitForIframeResizer(cb) {
  if (window.parent === window) {
    cb();
    return;
  }

  const interval = setInterval(() => {
    if (!window.parentIFrame) {
      return;
    }

    clearInterval(interval);
    cb();
  }, 100);
}
