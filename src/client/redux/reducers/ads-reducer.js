const adReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AD':
      return [
        ...state,
        {
          name: action.name,
          text: action.text,
          phone: action.phone,
          city: action.city,
          image: action.image,
          id: action.id
        }
      ];
    case 'REMOVE_AD':
      return state.filter(ad => (ad.id !== action.id));
    case 'EDIT_AD':
      return state.map(
        ad => (ad.id === action.id ? {
          name: action.name,
          text: action.text,
          phone: action.phone,
          city: action.city,
          image: action.image,
          id: action.id
        }
          : ad)
      );
  }
  return state;
};

export default adReducer;
