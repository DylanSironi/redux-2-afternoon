import axios from 'axios'
const initialState = {
    email: null,
    firstNName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)

    return {
      type: REQUEST_USER_DATA,
      payload: data
    }
  }

function reducer(state = initialState, action){
    switch (action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstNName, lastName} = action.payload.user
        return {email, firstNName, lastName}
        default:
            return state;
    }
}
export default reducer