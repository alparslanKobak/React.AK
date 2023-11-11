
import './style.css'
import Course from './Course';
import ReactImage from './images/React.png'; // Büyük harf küçük harf duyarlılığına dikkat edilmeli

import cSharp from './images/Csharp.jpeg'

import { Courser } from './Course';


// Props kullanımı (Namı diğer değişken kullanımı)
// MVC projelerindeki View Component yapısına benzer bir yapıdır. Örneğin bir kullanıcı listesi oluşturmak istediğimizde, bu listeyi bir component içerisinde oluşturup, bu componenti kullanmak istediğimiz her yerde kullanabiliriz. Bu componenti kullanırken de, kullanıcı listesini göndermek istediğimizde, bu listeyi props olarak gönderebiliriz. Bu sayede, component içerisindeki props değişkeni ile bu listeye erişebiliriz. Bu sayede, component içerisindeki listeyi değiştirmek istediğimizde, bu değişikliği component içerisinde değil, componenti kullandığımız yerde yapabiliriz. Bu sayede, component içerisindeki kodu değiştirmeden, componenti kullandığımız her yerde farklı bir liste gönderebiliriz.

// Props kullanımı için örnek: 
// 1) src/Course.js içerisindeki Course componentine props ekleyelim
// 2) src/App.js içerisindeki Course componentini kullanırken, props gönderelim

// key="value" şeklinde gönderilen props değerleri, component içerisindeki props değişkenine key=value şeklinde gelir. Bu sayede, component içerisindeki props değişkeni ile bu değerlere erişebiliriz. 



function App() {
  return (
    <div className="container bg-danger rounded-2 border border-success">

      <div className='row align-items-center'>
        <div className='col-4'>
          <Course image={ReactImage} title="React" description="React Kursu hepimiz için gerekli sanırım..." />

        </div>

        <div className='col-4'>
          <Course image={cSharp} title="C#" description="Bu da backend için gerekli" />
        </div>
      </div>
      
      <hr />

      <Courser />

    </div>
  );
}

export default App;
