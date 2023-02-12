import React, { useState } from "react";
export const RepositoriesList = () => {
  const [term, setTerm] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
