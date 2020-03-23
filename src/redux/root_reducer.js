import { combineReducers } from "redux";
import { postsReducer } from "./posts_reducer";
import { appReducer } from "./app_reducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});