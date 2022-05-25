let initailState = {
  count: 0,
  auth:false,
};
export const counterReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + 1,
      };
    }
    case 'DECREMENT': {
      return {
        count: state.count - 1,
      };
    }
    case 'RESET': {
      return { count: (state = 0) };
    }

    default:
      return state;
  }
};

export const authReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return{
        auth:state.auth=true,
      }
    }
    case 'LOGOUT': {
      return {
        auth:state.auth=false,
      }
    }
    default:
      return state;
  }
};
