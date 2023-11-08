import React, { useState } from 'react';

function NotDefteri() {
    class Not {
        constructor(baslik, icerik) {
            this.baslik = baslik;
            this.icerik = icerik;
        }
    }

    const [notlar, setNotlar] = useState([]);
    const [baslik, setBaslik] = useState('');
    const [icerik, setIcerik] = useState('');
    const [duzenlenenIndex, setDuzenlenenIndex] = useState(-1);

    const notEkle = () => {
        if (duzenlenenIndex >= 0) {

            notGuncelle(duzenlenenIndex, baslik, icerik);
        } else {

            const yeniNot = new Not(baslik, icerik);
            setNotlar(notlar.concat(yeniNot));
        }
        // Formu temizle
        setBaslik('');
        setIcerik('');
        setDuzenlenenIndex(-1);
    }

    const notSil = (index) => {
        const yeniNotlar = notlar.filter((_, i) => i !== index);
        setNotlar(yeniNotlar);
    }

    const notDuzenle = (index) => {

        setBaslik(notlar[index].baslik);
        setIcerik(notlar[index].icerik);
        setDuzenlenenIndex(index);
    }

    const notGuncelle = (index, yeniBaslik, yeniIcerik) => {
        const guncellenmisNotlar = notlar.map((not, i) =>
            i === index ? new Not(yeniBaslik, yeniIcerik) : not
        );
        setNotlar(guncellenmisNotlar);
    }

    return (
        <div className="container-fluid bg-dark text-white shadow">
            <div className="row">
                <div className="col-6 mt-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Başlık"
                        value={baslik}
                        onChange={(e) => setBaslik(e.target.value)}
                    />
                </div>
                <div className="col-6 mt-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="İçerik"
                        value={icerik}
                        onChange={(e) => setIcerik(e.target.value)}
                    />
                </div>
                <div className="col-12 mt-3 mb-3">
                    <button className="btn btn-outline-success" onClick={notEkle}>
                        {duzenlenenIndex >= 0 ? 'Güncelle' : 'Ekle'}
                    </button>
                </div>
            </div>
            <h4 className="text-center fst-italic">Görevlerim</h4>
            <hr />
            <ul className="list-group">
                {notlar.map((not, index) => (
                    <li key={index} className="m-3 p-3 rounded-5 list-group-item d-flex justify-content-between align-items-center row">
                        <div className="col-8">
                            <h5>{not.baslik}</h5>
                            <hr />
                            <p>{not.icerik}</p>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <button className="btn btn-info me-2 mt-2 col-12" onClick={() => notDuzenle(index)}>
                                    Düzenle
                                </button>
                                <button className="btn btn-danger mt-2 col-12" onClick={() => notSil(index)}>
                                    Sil
                                </button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotDefteri;
