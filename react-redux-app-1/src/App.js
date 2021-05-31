import logo from './logo.svg';
import './App.css';
import PizzaContainer from './components/PizzaContainer';
import { Provider } from 'react-redux'
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <PizzaContainer/>
    </div>
    </Provider>
  );
}

export default App;
