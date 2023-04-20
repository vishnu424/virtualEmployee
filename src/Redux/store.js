import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Define the initial state of the application
const initialState = {};

// Define the enhancers to be used for the store
let composeEnhancers = compose;

// If the Redux DevTools Extension is available, use it
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// Create the store using the rootReducer, initialState, and middleware
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
