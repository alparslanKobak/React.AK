
import './App.css';

import OzNavbar from './OzNavbar';
import LayoutSide from './LayoutSide';
import { useState, useEffect } from 'react';


function App() {

  const [siteLogoUrl, setSiteLogoUrl] = useState('');

  useEffect(() => {
    setSiteLogoUrl("https://m.media-amazon.com/images/G/41/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_tr-main._CB436417590_.png");

  }, [])

  function fonk() {
    return (
     
      // Bu satır ile anasayfa yapısında tasarlanan fonksiyonların komponentlerde kullanılması ile ilgili örnek bırakılmıştır.
       <>Sürpriz</>
      
    );
  }



  return (

    <div className="App">

      <div className='container-fluid'>
        <div className='row'>
          <OzNavbar fonksiyon={fonk} siteLogoUrl={siteLogoUrl} />
        </div>

        <div className='row'>
          <div className='col-2 bg-dark'>
            {/* Kategorilerin olduğu Layout gelecektir. */}
            <div className='row'>
              <LayoutSide />
            </div>
          </div>
          <div className='col-6'>
            {/* Ürünlerin Olduğu Ana Yapı Gelecektir */}

          </div>
          <div className='col-4'>
            <div className='row'>
              {/* Sepet Gelecektir. */}

            </div>
            <div className='row'>

            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
