import AngularImage from './images/Angular.png';

import CsharpImage from './images/Csharp.jpeg';

import JavaImage from './images/Java.png';

import ReactImage from './images/React.png';


const courseMap = {
    Angular: AngularImage,
    Csharp: CsharpImage,
    Java: JavaImage,
    React: ReactImage

    // Key ve value değeri birbirine eşit olsaydı :

    // AngularImage,
    // CsharpImage,
    // JavaImage,
    // ReactImage

    // Bu şekilde de kullanılabilirdi.
}

// courseMap =  Bu kullanım ile switch case yapısına benzer bir kullanım sağlanmıştır.

function Course(props) {

    // console.log(props.courseName)
    console.log(courseMap[props.courseName])
    return (

        <div className='card col-3 m-2 p-2'>


            <img  src={courseMap[props.courseName]} width={"100%"} maxWidth={"100%"} height={"100%"} maxHeight={"100%"} alt="" />



        </div>

    );
}

export default Course;