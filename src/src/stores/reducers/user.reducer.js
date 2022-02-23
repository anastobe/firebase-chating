const initialState = 0

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {


     //new
     case 'SET_VALUE': {
      return {
          ...state,
          data: action.payload,
      }
  }

  

    default:
      return state
  }
}

export default userReducer
