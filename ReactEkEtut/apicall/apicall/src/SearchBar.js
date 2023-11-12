import { useState } from 'react';
function SearchBar(props) {


    const [searchItem, setsearchItem] = useState('')



    
    const handleFormSubmit = (event) => {
        
        event.preventDefault(); // Sayfa yenilenmesini engeller
        props.search(searchItem)

        setsearchItem('')
    }


    return (
        <form onSubmit={handleFormSubmit}  className="row mt-4" >
            <div className="form-floating col-10">

                <input type="text" placeholder="Search" value={searchItem}
                    onChange={(e) => setsearchItem(e.target.value)}
                    className="form-control  shadow border border-success" />
                <label className="text-secondary ms-2" >Ne Arıyorsunuz</label>
            </div>
            <div className="col-2 align-self-end">
                <button onClick={handleFormSubmit} className="btn btn-success shadow"> Ara</button>
            </div>

        </form>
    );
}

export default SearchBar;