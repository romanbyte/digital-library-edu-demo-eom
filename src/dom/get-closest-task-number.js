/**
 * Поиск ближайшего элемента с аттрибутом data-task-number.
 * @param {HTMLElement} el
 * @returns {number|null}
 */
export function getClosestTaskNumber(el) {
  const closest = el.closest('[data-task-number]');

  return closest ? Number(closest.dataset.taskNumber) : null;
}
