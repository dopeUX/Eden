import logo from './logo.svg';
import './styles/main.css';
import './styles/reactstp.css';
import Fragments from './components/Fragments';

function App() {
  return (
    <div className="App">
      <div className='hero'>
         <h1 className='hero-logo'>Eden</h1>
         <div className='hero-fragments'>
           <Fragments/>
         </div>
      </div>
    </div>
  );
}

export default App;
