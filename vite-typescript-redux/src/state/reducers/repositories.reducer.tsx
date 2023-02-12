interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case "search_repositories_start":
      return {
        error: null,
        data: [],
        loading: true,
      };
    case "search_repositories_success":
      return {
        error: null,
        data: action.payload,
        loading: false,
      };
    case "search_repositories_failure":
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

