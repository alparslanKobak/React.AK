import React from 'react'


// 'fanc' kısaltmasını kullanarak fonksiyon tanımlayabiliriz
export const Courser = () => {
    return (
        <div>Courser</div>
    )
}


// Alternatif olarak 'ffc' kısaltmasını kullanarak fonksiyon tanımlayabiliriz
function Course({title, description, image}) { // props parametresini aldık

    // props parametresini aldık
    // const title = props.title;
    // const description = props.description;

    // const { title, description } = props;

    //  const { title, description } = props; bu kullanım ile aslında biz props.title ve props.description şeklindeki kullanımları kısaltmış oluyoruz. Yani props.title yerine title, props.description yerine description yazmış oluyoruz. Bu sayede, component içerisindeki props.title ve props.description yerine title ve description yazarak, kodumuzu daha kısa ve okunabilir hale getirmiş oluyoruz.
    //-----------------------------------------------------------------

    // Yahut direkt parametre içerisinden de  süslü parantez açıp, parametreleri yerleştirip, fonksiyon içine alabiliriz. Bu sayede, fonksiyon içerisindeki props.title ve props.description yerine title ve description yazarak, kodumuzu daha kısa ve okunabilir hale getirmiş oluyoruz.




    console.log({title, description})
    return (
        <div className='card m-3 shadow border border-black text-center text-bg-dark'>
            <img src={image} className='img-container border border-secondary rounded-2' alt="" />
           
            <h1 className='mt-3'>{title}</h1>
            <hr />
            <p>{description}</p>
        </div>


    );
}

export default Course;