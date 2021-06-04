import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './Components/Navbar/Navbar';
import { CartProvider } from './Context/cartContext';
import HomeContainer from './Containers/HomeContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContainer from './Containers/CartContainer';
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