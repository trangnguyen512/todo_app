const initState = {
  search: "",
  status: "All",
  priority: "[]",
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFillterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/prioritiesFillterChange":
      return {
        ...state,
        priorities: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
