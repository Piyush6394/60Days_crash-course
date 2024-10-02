export const actionTypeLogger = (store) => (next) => (action) => {
  console.log('Action Type:', action.type)
  return next(action)
}

export const payloadLogger = (store) => (next) => (action) => {
  if (action.payload) {
    console.log('Payload:', action.payload)
  }
  return next(action)
}
