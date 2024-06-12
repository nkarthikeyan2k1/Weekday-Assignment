import "./App.css";
import CandidateApplication from "./components/CandidateApplication";
import store from "./store";
import { Provider } from "react-redux";
import ThemeContext from "./ThemeContext";

function App() {
  return (
    <Provider store={store}>
      <ThemeContext>
        <CandidateApplication />
      </ThemeContext>
    </Provider>
  );
}

export default App;
