import ImageItem from "./ImageItem";

function ImageList(props) {
    return ( 
        <div className="row d-flex flex-wrap justify-content-center">
{
    props.ImagesPlaceholder.map((image) => {
       

       return <ImageItem key={image.id} picture={image} />
    })
}
        </div>
     );
}

export default ImageList;