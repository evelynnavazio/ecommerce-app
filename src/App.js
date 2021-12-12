import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousele from './components/Carousel/Carousele'

function App() {
  return (
    <div>
      <NavBar/>
      <Carousele/>
      
      <ItemListContainer greeting='Titulo provisional' />
    </div>
  );
}

export default App;
