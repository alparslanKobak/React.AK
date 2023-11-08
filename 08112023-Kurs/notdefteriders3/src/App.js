import logo from './logo.svg';
import './App.css';
import NotDefteri from './NotDefteri';

function App() {
  return (
    <div className='container-fluid'>
      <div className="App">
        <header className="App-header text-center">
<h2>
  Görev Listem
</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
          <NotDefteri />
        </header>
      </div>
    </div>

  );
}

export default App;
