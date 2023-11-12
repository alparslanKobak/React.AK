
import axios from 'axios';


const searchImages = async (searchItem) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID T1P0STueb5o-99BC0H_v8Bj2VrMntNk4QfGrah6YMMs',
        },
        params: {
            query: searchItem
        }
    })

    return response.data.results;
}


export default searchImages;
