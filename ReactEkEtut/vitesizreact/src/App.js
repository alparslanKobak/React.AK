
import './App.css';
// JSX yapısında, return içerisinde sadece tek bir parent (kapsayıcı) element olmalıdır. Aksi takdirde hata alınır.
function App() {

  const maas = 15000;

  const adSoyad = "Alparslan KOBAK";

  const calisiyorMu = true; // True değerini ekrana direkt olarak basamayız. Tetikleyici olarak kullanabiliriz. Örneğin, bir butona tıklanıp tıklanmadığını kontrol etmek için kullanabiliriz. Ya da Turnary Operator ile kullanabiliriz.

  const date = 'date'; // input type'ı için değişken tanımladık. Bu değişkeni direkt olarak input type'ına eşitlemek için süslü parantez içerisinde yazmamız gerekiyor. Aksi takdirde hata alırız.

  const imgUrl = 'https://picsum.photos/200/200'
  const classNamecik = 'box'
  return (
    // <div>
    //   <h1>İsmim ve Soyismim</h1>
    //   <hr />
    //   <h3>{adSoyad}</h3>
    //   <p>Maaş : {maas}</p>
    //   <p>Çalışıyor mu : {calisiyorMu ? "Evet" : "Hayır"}</p>

    //   <input type={date} />

    //   <img src={imgUrl} alt="" />

    // </div>

    <div style={{
      border: '1px solid red',
      backgroundColor: 'blue',
    }} className={classNamecik}>

    </div>
    // Style etiketi kullanırken süslü parantez içerisinde yazmamız gerekiyor. Aksi takdirde hata alırız. Style etiketi içerisinde yazdığımız css kodları camelCase olarak yazılır. Örneğin, background-color yerine backgroundColor olarak yazılır.

  );
}

export default App;
