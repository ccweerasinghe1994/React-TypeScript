import { Provider } from "react-redux";
import { store } from "../state/store";
import RepositoryList from "./RepositoryList";

const App = () => {
  return (
    <Provider store={store}>
      <h3>Finding Repositories</h3>
      <RepositoryList />
    </Provider>
  );
};

export default App;
