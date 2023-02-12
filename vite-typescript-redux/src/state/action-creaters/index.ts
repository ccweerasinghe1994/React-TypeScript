import axios from "axios";
import { ActionTypes } from "../action-types";

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORY_START,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORY_ERROR,
        payload: error.message,
      });
    }
  };
};
