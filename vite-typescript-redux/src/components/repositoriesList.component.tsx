import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

export const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={term}
          type="text"
          onChange={(event) => setTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
