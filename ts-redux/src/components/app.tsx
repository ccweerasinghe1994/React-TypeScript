import { Provider } from "react-redux";
import { store } from "../state/store";
import { GlobalStyles, MainHeaderContainer } from "./app.styles";
import RepositoryList from "./RepositoryList";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MainHeaderContainer>Finding Repositories</MainHeaderContainer>
      <RepositoryList />
    </Provider>
  );
};

export default App;
