
import './App.css';

import OzNavbar from './OzNavbar';
import LayoutSide from './LayoutSide';
import { useState, useEffect } from 'react';


import tefalTava from './images/TefalTava.jpeg'
import monsterNotebook from './images/MonsterNotebook.jpg'
import kediMamasi from './images/KediMamasi.jpg'
import bahceSalincak from './images/BahceSalincak.jpeg'
import sarjliMatkap from './images/ŞarjlıMatkap.jpg'


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




  const tumUrunler = [
    { id: 1, urunAdi: 'Tava', urunKategori: 'Ev Eşyaları', urunFiyat: 100, urunMarka: 'Tefal', urunResim: tefalTava },
    { id: 2, urunAdi: 'Monster - Notebook', urunKategori: 'Elektronik Eşyalar', urunFiyat: 23000, urunMarka: 'Monster', urunResim: monsterNotebook },
    { id: 3, urunAdi: 'Kedi Maması 15kg', urunKategori: 'Evcil Dostlar', urunFiyat: 850, urunMarka: 'Whiskas', urunResim: kediMamasi },
    { id: 4, urunAdi: 'Bahçe Salıncağı', urunKategori: 'Bahçe Ürünleri', urunFiyat: 48000, urunMarka: 'Pratik Ahşap', urunResim: bahceSalincak },
    { id: 5, urunAdi: 'Şarjlı Matkap', urunKategori: 'Nalbur Malzemeleri', urunFiyat: 6000, urunMarka: 'Bosch', urunResim: sarjliMatkap }
  ]


  const [sepetUrunleri, setSepetUrunleri] = useState([]);


  function Urunler() {
    return (
      <div className='row justify-content-start m-2'>
        {
          tumUrunler.map(urun => ListeUrunu(urun))
        }
      </div>
    );
  }


  function ListeUrunu(urun) {
    return (
      <div className='col-3 m-4 p-4 border border-black shadow rounded-4' >
        <div className='justify-content-center'>
          <img src={urun.urunResim} className='card-img-top' alt='Ürün Resmi' />

          <div className='card-body'>
            <h5 className='card-title'>{urun.urunAdi}</h5>
            <p className='card-text'>{urun.urunKategori}</p>
            <p className='card-text'>{urun.urunFiyat} TL</p>
            <p className='card-text'>{urun.urunMarka}</p>
            <button onClick={() => SepeteEkle(urun)} className='btn btn-outline-primary'>Sepete Ekle</button>
          </div>
        </div>
      </div>
    );
  }

  function SepeteEkle(urun) {

    if (sepetUrunleri.some(x => x.id === urun.id)) {
      alert('Bu ürün zaten sepetinizde bulunmaktadır. Satış Sözleşmemiz ve Perakende koşullarımız gereği aynı üründen en fazla 1 adet satın alabilirsiniz.');
    }
    else {
      setSepetUrunleri([...sepetUrunleri, urun]);
    }


  }

  function SepettenCikar(urun) {
    setSepetUrunleri(sepetUrunleri.filter(x => x.id !== urun.id));
  }


  function SepetUrunu(urun) {

    return (



      <div class="card mb-3 p-2">
        <div class="row g-0 ">
          <div class="col-md-4">
            <img src={urun.urunResim} class="img-fluid rounded-start" alt={urun.urunResim} />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{urun.urunAdi}</h5>
              <p class="card-text">{urun.urunFiyat} ₺ </p>
              <p class="card-text"><small class="text-body-secondary">{urun.urunMarka}</small></p>
            </div>
          </div>
          <div className='col-md-3'>
            <button onClick={() => SepettenCikar(urun)} className='btn btn-outline-danger ms-5'>Sepetten Çıkar</button>
          </div>
        </div>
      </div>



    )

  }

  function SatinAlisiTamamla() {

   

    if (sepetUrunleri.length === 0) {
      alert('Sepetinizde Ürün Bulunmamaktadır. İyi Alışverişler Dileriz. ;)');
      return;
    }
    else {
      prompt('Kredi Kartı Numaranızı Giriniz : ')
      prompt('Kredi Kartı Son Kullanma Tarihi : ')
      prompt('Kredi Kartı Güvenlik Kodu : ')
      prompt('Kredi Kartı Sahibinin Adı Soyadı : ')

      alert('Ödeme İşleminiz Başarıyla Gerçekleştirilmiştir. Teşekkür Ederiz.')
      setSepetUrunleri([]);
    }



  }

  function SepetUrunuListele() {

    function SepetToplamTutarHesapla() {
      let toplamTutar = 0;
      sepetUrunleri.forEach(urun => {
        toplamTutar += urun.urunFiyat;
      });

      return toplamTutar;

    }

    return (
      <div className='row bg-dark p-2 overflow-auto'>
        <div className='row bg-dark p-2 overflow-auto'>
          {
            sepetUrunleri.map(urun => SepetUrunu(urun))
          }
        </div>
        <div className='row bg-secondary justify-content-center align-items-center border border-white'>
          <div className='col-6'>
            <h5 className='text-white'>Tutar : {SepetToplamTutarHesapla()} ₺</h5>
          </div>

          <div className='col-6 '>
            <button onClick={SatinAlisiTamamla} className='btn btn-warning m-1'><i class="fa-solid fa-cart-shopping fa-shake"></i>Satın Al</button>
          </div>
        </div>


      </div>

    )
  }



  function Sepet() {


    return (
      <div className='col-2'>
        {/* Sepet Gelecektir */}
        {
          SepetUrunuListele()
        }
        <div className='row'>
          {/* /*Ödeme formu gelecektir. */}
        </div>
      </div>
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
          <div className='col-8'>
            {/* Ürünlerin Olduğu Ana Yapı Gelecektir */}
            {
              Urunler()
            }

          </div>

          {
            Sepet()
          }

        </div>


      </div>
    </div>
  );
}

export default App;
