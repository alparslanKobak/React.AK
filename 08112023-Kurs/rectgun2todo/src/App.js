import logo from './logo.svg';
import './App.css';
import Todos from './Todos';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <div className='row'>
          <div className='offset-4'>

          </div>
          <div className='col-6'>
            <Todos />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
