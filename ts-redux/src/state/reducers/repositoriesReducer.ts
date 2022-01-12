import { Action } from "../action";
import { ActionType } from "../action-types";

interface RepositoriesState {
  error: string | null;
  loading: boolean;
  data: string[];
  firstRender:boolean
}

const initialState = {
  error: null,
  loading: false,
  data: [],
  firstRender:false
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
        firstRender:false
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
        firstRender:true
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
        firstRender:false
      };
    default:
      return state;
  }
};
