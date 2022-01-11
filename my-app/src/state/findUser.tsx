import { useState } from "react";
import {
  CustomButton,
  CustomInput,
  ErrorContainer,
  Header,
  ListContainer,
  Wrapper,
} from "./guest-list.styles";
const users = [
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
const FindUser: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    console.log(name);

    const foundUser = users.find((user) => user.name === name.toLowerCase());
    console.log(foundUser);

    setUser(foundUser);
  };

  return (
    <Wrapper>
      <Header>Find User</Header>
      <CustomInput value={name} onChange={(e) => setName(e.target.value)} />
      <CustomButton onClick={onClick}>find user</CustomButton>

      <ListContainer>
        {user !== undefined ? (
          <>
            <li>name : {user.name}</li>
            <li>age : {user.age}</li>
          </>
        ) : (
          <ErrorContainer>canto find the specified user</ErrorContainer>
        )}
      </ListContainer>
    </Wrapper>
  );
};

export default FindUser;
