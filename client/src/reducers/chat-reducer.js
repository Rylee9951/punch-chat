const initialState = {
  logged: false,
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return {...state, messages: [...state.messages, action.message]}
    case actions.LOGIN:
      return {...state, logged: true}
    default:
      return state
  }
}