export const loadData = () => {
  try {
    const serialized = localStorage.getItem('collected');
    if (serialized === null) {
      return undefined
    }
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
};

export const saveData = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('collected', serializedState);
  } catch (err) {
    // Ignore for now
  }
};