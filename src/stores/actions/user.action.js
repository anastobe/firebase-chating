export const setValue = (value) =>{
  return{ 
    type: "SET_VALUE",
    payload: value 
   }
 }


export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getUser()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}
