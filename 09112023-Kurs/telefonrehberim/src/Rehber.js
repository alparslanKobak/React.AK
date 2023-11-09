import { useState } from "react";


function Rehber() {


    const [id, setId] = useState(0);
    const [editId, setEditId] = useState(-1);
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [telNo, setTelNo] = useState('');

    const [telRehberim, setTelRehberim] = useState([]);

    const kayitEkle = () => {

        if (editId >= 0) {
            kayitGuncelle(editId);

        }
        else {
            const yeniKisi = {
                id: (id + 1),
                ad: ad,
                soyad: soyad,
                imageUrl: imageUrl,
                telNo: telNo
            }


            setTelRehberim([...telRehberim, yeniKisi])

            setId(id + 1);
            setAd('');
            setSoyad('');
            setImageUrl('');
            setTelNo('');

        }


    }

    const kayitSil = (id) => {
        const yeniKisiListesi = telRehberim.filter(c => c.id !== id)

        setTelRehberim(yeniKisiListesi)
        setEditId(-1);
        setAd('');
        setSoyad('');
        setImageUrl('');
        setTelNo('');

    }

    const kayitGuncelle = (id) => {
        setEditId(id);

        const arananKisi = telRehberim.find(c => c.id === id);

        setAd(arananKisi.ad);
        setSoyad(arananKisi.soyad);
        setImageUrl(arananKisi.imageUrl);
        setTelNo(arananKisi.telNo);



    }




    function rehberItem(id, ad, soyad, imageUrl, telNo) {
        return (
            <div className="col-3 m-2">
                <div className="card shadow-lg">
                    <img src={imageUrl} className="card-img-top" alt={ad + soyad} />
                    <div className="card-body">
                        <h5 className="card-title"> {id}. - {ad} {soyad}</h5>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><p> <b>Tel No :</b> {telNo}</p></li>

                    </ul>
                    <div className="card-body">
                        <button onClick={() => kayitGuncelle(id)} className="btn btn-primary ms-1">Düzenle</button>
                        <button onClick={() => kayitSil(id)} className="btn btn-danger ms-1">Sil</button>
                    </div>
                </div>
            </div>
        );
    }





    return (

        <div className='row mt-5'>

            <div className='col-4 p-5 ms-2 rounded-5 row bg-secondary text-center'>

                <h4 className="col-10 text-black">Kayıt {editId >= 0 ? "Güncelle" : "Ekle"}</h4>

                <hr />

                {/* Telefon Rehberi Crud İşlemleri için ayrılacak Form yapısı */}

                <input
                    type="text"
                    className="form-control col-10 border border-dark "
                    value={ad}
                    onChange={(i) => setAd(i.target.value)}
                    placeholder="Ad Giriniz : "
                />

                <hr />

                <input
                    type="text"
                    className="form-control col-10 border border-dark"
                    value={soyad}
                    onChange={(i) => setSoyad(i.target.value)}
                    placeholder="Soyad Giriniz : "
                />

                <hr />

                <input type="text"
                    className="form-control col-10 border border-dark"
                    value={telNo}
                    onChange={(i) => setTelNo(i.target.value)}
                    placeholder="Telefon Numarası Giriniz : "
                />

                <hr />

                <input type="text"
                    className="form-control col-10 border border-dark"
                    value={imageUrl}
                    onChange={(i) => setImageUrl(i.target.value)}
                    placeholder="Fotoğrafın Url Adresini Giriniz : "
                />

                <hr />

                <button
                    className="btn btn-success"
                    onClick={kayitEkle}
                >
                    {editId >= 0 ? "Güncelle" : "Kaydet"}
                </button>








            </div>
            <div className='col-8 ps-5'>

                <div className="row overflow-x-auto">

                    {/* Telefon Rehberi Card itemleri gelecek */}

                    {
                        telRehberim.map(c => (
                            rehberItem(
                                c.id,
                                c.ad,
                                c.soyad,
                                c.imageUrl,
                                c.telNo
                            )
                        )

                        )
                    }


                </div>


            </div>
        </div>

    );
}

export default Rehber;