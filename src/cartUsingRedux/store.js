import cartItem from "./services/reducers/Reducer";
import rootReducer from "./services/reducers";
import { createStore } from "redux";

export default createStore(rootReducer)

// export default createStore(cartItem);