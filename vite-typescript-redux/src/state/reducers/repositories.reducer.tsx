import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORY_START:
      return {
        error: null,
        data: [],
        loading: true,
      };
    case ActionTypes.SEARCH_REPOSITORY_SUCCESS:
      return {
        error: null,
        data: action.payload,
        loading: false,
      };
    case ActionTypes.SEARCH_REPOSITORY_ERROR:
      return {
        error: action.payload,
        data: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
