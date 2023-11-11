
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)


  const arttirFonk = () => {
    { count === 10 ? alert("En fazla 10 kurs ekleyebilirsiniz") : setCount(count + 1) }
  }

  // Error Function kullanarak da yazabiliriz. Böylelikle butona tıklandığında fonksiyonu çağırmamıza gerek kalmaz.


  const azaltFonk = () => {
    { count === 0 ? alert("Silinecek kurs bulunmamaktadır") : setCount(count - 1) }
  }
  return (
    <div className="App">

      <button onClick={arttirFonk}>
        Kurs Ekle
      </button>

      <button onClick={azaltFonk}>
        Kurs Sil
      </button>

      {/* <button onClick={() => {setCount(count+1)}}>
      Kurs Ekle 
    </button> */}
      <div>
        Kurs Sayısı : {count}
      </div>
    </div>
  );
}

export default App;
