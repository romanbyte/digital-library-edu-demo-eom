function checkAnswers(task, values) {
  const isAnswered = values.length > 0;

  return isAnswered && values.every((value, key) => value === task.right[key]);
}

function checkSelectableTask(task, form) {
  const inputs = form.querySelectorAll('input[type=radio]:checked');
  const values = [...inputs].map((input) => input.value);

  return checkAnswers(task, values);
}

function checkTextTask(task, form) {
  const inputs = form.querySelectorAll('input[type=text]');
  const values = [...inputs].map((input) => input.value);

  return checkAnswers(task, values);
}

export function checkTask(task) {
  const form = document.getElementById(`task-${task.number}-answers`);

  if (!form) {
    return false;
  }

  switch (task.type) {
    case 'radio':
    case 'checkbox':
      return checkSelectableTask(task, form);
    case 'text':
      return checkTextTask(task, form);
  }
}

export function checkDisplay(task, isCorrect) {
  const correct = document.getElementById(`task-${task.number}-correct`);
  const wrong = document.getElementById(`task-${task.number}-wrong`);

  [correct, wrong].forEach((elem) => elem.classList.add('d-none'));

  (isCorrect ? correct : wrong).classList.remove('d-none');
}
