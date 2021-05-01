import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer title='CATALOGO'/>
      <ItemDetailContainer title='Detalles'/>
    </div>
  );
}

export default App;
