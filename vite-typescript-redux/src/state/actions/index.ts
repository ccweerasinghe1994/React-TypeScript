import { ActionTypes } from "../action-types";

export type Action =
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
