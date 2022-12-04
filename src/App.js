import './App.css';
import image from './shopping.jpg';
import image2 from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} width='200px' alt='shopping'/>
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={image2} width='200px' alt='shopping man'/>
      </div>
    </div>
  )
}

export default App;