import { ActionType } from "../action-types";


export interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesError
  | SearchRepositoriesSuccess;
