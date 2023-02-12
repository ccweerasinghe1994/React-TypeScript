interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

type Action =
  | SearchRepositoryStartAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;

interface SearchRepositoryStartAction {
  type: ActionTypes.SEARCH_REPOSITORY_START;
}

interface SearchRepositorySuccessAction {
  type: ActionTypes.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}
interface SearchRepositoryErrorAction {
  type: ActionTypes.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

enum ActionTypes {
  SEARCH_REPOSITORY_START = "search_repositories_start",
  SEARCH_REPOSITORY_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORY_ERROR = "search_repositories_error",
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
