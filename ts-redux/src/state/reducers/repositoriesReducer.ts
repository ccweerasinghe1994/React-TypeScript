import { Action } from "../action";
import { ActionType } from "../action-types";

interface RepositoriesState {
  error: string | null;
  loading: boolean;
  data: string[];
}

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
