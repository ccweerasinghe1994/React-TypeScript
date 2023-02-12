import { combineReducers } from "redux";
import repositoryReducer from "./repositories.reducer";
export const reducers = combineReducers({
  repository: repositoryReducer,
});

export type RootState = ReturnType<typeof reducers>;
