import  { Component } from 'react';
import './App.css';
import datalar from './database/db.json';

class Applicationcuk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urunler: [],
            kategoriler: []
        };
    }

    componentDidMount() {
        this.setState({
            urunler: datalar.products,
            kategoriler: datalar.categories
        });
    }

    render() {
        const { urunler, kategoriler } = this.state;
        return (

            <div className='row justify-content-center bg-danger '>
                {urunler.map((urun) => (
                    <div className='col-9 col-sm-6 col-md-4 col-lg-3 beyaz-shadow-cerceve   bg-dark text-bg-dark rounded-3 p-5 m-2' key={urun.id}>
                        <div className='card beyaz-shadow-cerceve '>
                            <div className='card-body text-center'>
                                <img className='card-img-top  rounded-2' src={urun.image} alt={urun.productName} width={"100%"} height={"200px"} title={urun.productName} />
                                <h4 className='card-title fw-bold mt-1'>{urun.productName}</h4>
                                <hr />
                                <p className='card-text fw-bold fst-italic'>{
                                    kategoriler.find((kategori) => kategori.id === urun.categoryId).categoryName
                                }</p>
                                <p className='card-text'>{urun.desc}</p>
                                <p className='card-text fw-bold'>{urun.price} €</p>
                                <hr />
                                <button className='btn btn-warning'><i class="fa-solid fa-cart-plus fa-bounce"></i> Add To Cart </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}

export default Applicationcuk;

