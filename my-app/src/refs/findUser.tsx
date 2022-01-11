import React, { useState, useRef, useEffect } from "react";
import {
  CustomButton,
  CustomInput,
  ErrorContainer,
  Header,
  ListContainer,
  Wrapper,
} from "../state/guest-list.styles";
export const usersData = [
  {
    name: "a",
    age: 20,
  },
  {
    name: "b",
    age: 20,
  },
  {
    name: "c",
    age: 20,
  },
  {
    name: "d",
    age: 20,
  },
];
const FindUserWithRef: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [hasError, setHasError] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    const foundUser = usersData.find(
      (user) => user.name === name.toLowerCase()
    );
    if (!foundUser) {
      setHasError(true);
    } else {
      setHasError(false);
    }

    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
    return;
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (!event.target.value) {
      setHasError(false);
      setUser(undefined);
    }
  };
  return (
    <Wrapper>
      <Header>Find User</Header>
      <CustomInput ref={inputRef} value={name} onChange={onChange} />
      <CustomButton onClick={onClick}>find user</CustomButton>

      <ListContainer>
        {user !== undefined ? (
          <>
            <li>name : {user.name}</li>
            <li>age : {user.age}</li>
          </>
        ) : hasError ? (
          <ErrorContainer>canto find the specified user</ErrorContainer>
        ) : null}
      </ListContainer>
    </Wrapper>
  );
};

export default FindUserWithRef;
