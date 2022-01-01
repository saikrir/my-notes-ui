import AppContainer from './components/app-container';
import reduxStore from './redux/store';
import { Provider } from 'react-redux'


function App() {
  return <Provider store={reduxStore}>
    <AppContainer />
  </Provider>
}

export default App;
