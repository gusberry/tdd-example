export default function counterReducer(state = 0, action) {
  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      return state - 1;

    default:
      return state;
  }

  return state;
}
