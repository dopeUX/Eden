import logo from './logo.svg';
import './styles/main.css';
import Fragments from './components/Fragments';

function App() {
  return (
    <div className="App">
      <div className='hero'>
         <h1 className='hero-logo'>Eden</h1>
         <div>
           <Fragments/>
         </div>
      </div>
    </div>
  );
}

export default App;
