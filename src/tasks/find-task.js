import { tasks } from './tasks';

export function findTask(taskNumber) {
  const task = tasks.find((task) => task.number === taskNumber);

  return { ...task };
}
