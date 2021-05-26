import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import ProductsContainer from './containers/productsContainer/productsContainer';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Tienda de Final Fantasy XV" />
          </Route>
          <Route exact path="/products/:category">
            <ProductsContainer />
          </Route>
          <Route exact path="/product/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart/">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
