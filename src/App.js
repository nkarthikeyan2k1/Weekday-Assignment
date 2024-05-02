import './App.css';
import CandidateApplication from './components/CandidateApplication';
import store from './store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CandidateApplication />
    </Provider>
  );
}

export default App;
