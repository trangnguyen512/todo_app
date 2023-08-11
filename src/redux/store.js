// tạo 1 cái kho
import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"

// tạo 1 biến
// createStore nhận vào 3 tham số

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);

export default store;
