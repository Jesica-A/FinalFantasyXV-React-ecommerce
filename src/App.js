import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Tienda de Final Fantasy XV" />
          </Route>
          <Route exact path="/products/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart/">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
