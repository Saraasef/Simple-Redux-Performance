import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Header from './Header';
import Product from './Product';
// import Box from './Box';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Product id='1' price='12300'/>
      </div>
    </Provider>
  );
}

export default App;
