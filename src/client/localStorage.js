export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    let currentState = Object.assign({},state);
    const serializedState = JSON.stringify(currentState);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    //Ignore write errors
  }
};
