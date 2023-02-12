import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repository
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

      {error && <h1>error</h1>}
      {loading && <h1>Loading</h1>}
      {data && (
        <div>
          {data.map((item: any) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};
