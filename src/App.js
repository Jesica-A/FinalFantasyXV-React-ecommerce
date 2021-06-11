import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/navbar/Navbar';
import { CartProvider } from './context/cartContext';
import HomeContainer from './containers/HomeContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <HomeContainer />} />
          <Route path='/categories/:categoryId' render={() => <HomeContainer />} />
          <Route path='/item/:productId' render={() => <ItemDetailContainer />} />
          <Route exact path='/cart' render={() => <CartContainer />} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;