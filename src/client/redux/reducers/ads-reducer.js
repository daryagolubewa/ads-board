const adReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_AD':
      return [
        ...state,
        {
          name: action.name,
          sum: parseInt(action.sum),
          id: action.id
        }
      ]
    case 'REMOVE_AD':
      return state.filter(expense =>
        (expense.id !== action.id)
      )
    case 'EDIT_AD':
      return state.map(
        expense => expense.id === action.id ?      {
            name: action.name,
            sum: parseInt(action.sum),
            id: action.id
          }
          : expense
      )

  }
  return state
};

export default adReducer
