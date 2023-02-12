import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

export const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useSelector(
    (state: any) => state.repository
  );
  console.log("😁 ➡️", data);
  console.log("😁 ➡️", error);
  console.log("😁 ➡️", loading);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
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
