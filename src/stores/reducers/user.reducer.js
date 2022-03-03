const initialState = 0

export const userReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
//  new

 case 'SET_SIGNUP_FIELDS': {
  return {
      ...state,
      [action.key]: action.value,
  }
}

  

    default:
      return state
  }
}

export default userReducer
