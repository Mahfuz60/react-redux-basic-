let initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // return state + 1;
      return state + action.payload;
    case 'DECREMENT':
      // return state - 1;
      return state - action.payload;
    default:
      return state;
  }

  // if (action.type === 'INCREMENT') {
  //   // return state + 1;
  //   return state + action.payload;
  // }
  // if (action.type === 'DECREMENT') {
  //   // return state - 1;
  //   return state - action.payload;
  // } else {
  //   return state;
  // }
};

export default changeTheNumber;
