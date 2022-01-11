import { Component, ReactNode } from "react";
import {
  CustomButton,
  CustomInput,
  ErrorContainer,
  ListContainer,
  Wrapper,
  Header,
} from "../state/guest-list.styles";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}
interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name.toLowerCase()
    );
    this.setState({ user: foundUser });
  };

  render(): ReactNode {
    const { name, user } = this.state;
    return (
      <Wrapper>
        <Header>Find User</Header>
        <CustomInput
          value={name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        />
        <CustomButton onClick={this.onClick}>find user</CustomButton>

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
  }
}

export default UserSearch;
