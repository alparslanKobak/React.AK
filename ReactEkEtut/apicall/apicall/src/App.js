

import './App.css';
import SearchBar from './SearchBar';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './components/ImageList';


function App() {


  const [images, setImages] = useState([])


  const SearchAny = async (herhangiBirsey) => {
    console.log(herhangiBirsey)
    const result = await searchImages(herhangiBirsey)

    // Konsolda cevabı görmek için şu yazılır : searchImages(herhangiBirsey).then(response => console.log(response.data.results))

    setImages(result)

    // Eğer SetImages([...images, result]) yazmış olsaydık her arama sonucunda yeni arama sonucu eski arama sonucunun üzerine eklenirdi. Biz ise her arama sonucunda eski arama sonucu gitsin ve yalnızca yeni arama sonucu gelsin istiyoruz. Bu yüzden SetImages(result) yazdık.
  }


  return (
    <div className="container-fluid">
      <div className='row justify-content-center'>
        <div className='col-5'>
          <SearchBar search={SearchAny} />
        </div>
      </div>
      <hr />

      <ImageList ImagesPlaceholder={images} />



    </div>
  );
}

export default App;
