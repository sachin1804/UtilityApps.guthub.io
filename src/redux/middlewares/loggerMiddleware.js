// the middleware is nothing but a function it takes three paramters store, next, action

export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      // logging the action type
      console.log("[LOG]: " + action.type + " " + new Date().toString());
      // calling next function that forwords our action to next middleware if it is present if not then its gets forwarded to reducers
      next(action);
      // logging the current state of the store
      console.log(store.getState());
    };
  };
};
