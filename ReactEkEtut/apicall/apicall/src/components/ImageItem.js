function ImageItem(props) {

    console.log(props.picture)
    return (
        <div className="p-2 col-3">
            <img className="shadow-lg" src={props.picture.urls.thumb} title={props.picture.alt_description} alt={props.picture.alt_description} />
        </div>
    );
}

export default ImageItem;