export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      console.log(action.list);
      return { ...state, list: action.list, loading: false };
    case "LOAD":
      return { ...state, loading: true };
    case "SEARCH":
      return { ...state, loading: false, search: action.value };
    default:
      return state;
  }
};
