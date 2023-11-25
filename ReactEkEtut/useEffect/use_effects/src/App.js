
import './App.css';
import { useState, useEffect } from 'react';



function App() {

  const [health, setHealth] = useState(100);



  // useEffect(() => {

  // })
  // Bu şekilde çağırılan useEffect her renderda çalışır

  // useEffect(() => {
  // }, [])
  // Bu şekilde çağırılan useEffect sadece ilk renderda çalışır

  // useEffect(() => {
  // }, [health])
  // Bu şekilde çağırılan useEffect sadece health değiştiğinde çalışır

  useEffect(() => {
    if (health < 0) {
      setHealth(0)
    }
    else if (health > 100) {
      setHealth(100)
    }
  }, [health])

  useEffect(() => {
    alert('Oyun başladı, Hoşgeldin oyuncu :)')
  },[])

  useEffect(() => {
    alert(health <30 ? 'Canınız Kritik : ' + health : health <=0 ? 'Canınız Bitti : ' +health : 'Canınız : ' + health)
  })

  const arttirSaglik = () => {

    if (health >= 100) {
      alert('Canınız tamamen dolu')
      return;
    }
    else {
      setHealth(health + (Math.round(
        Math.random() * 10
      )))
    }

  }

  const azaltSaglik = () => {
    if (health <= 0) {
      alert('Canınız tamamen bitti')
      return;
    }
    else {
      setHealth(health - (Math.round(
        Math.random() * 10
      )))
    }
  }

  return (
    <div className="container bg-danger">
      <div className='row justify-content-center'>
        <h1 className='col-12 fw-bold text-center'>Health: {health}</h1>
        <button className='btn btn-warning col-5  m-2' onClick={azaltSaglik}>-</button>
        <button className='btn btn-success col-5  m-2' onClick={arttirSaglik}>+</button>
      </div>




    </div>
  );
}

export default App;
