const state = {
  taskNumber: 1
};

export const getCurrentTaskNumber = () => state.taskNumber;

export const setCurrentTaskNumber = (taskNumber) => {
  state.taskNumber = taskNumber;
};
