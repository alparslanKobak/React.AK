import './App.css';
import Course from './Course';

import { useState } from 'react';




function getRandomCourse() {

  const courseArray = ['Angular', 'Csharp', 'Java', 'React'];

  return courseArray[Math.floor(Math.random() * courseArray.length)]

}




function App() {

  const [courses, setCourses] = useState([])

  const handleClick = () => {


    setCourses([...courses, getRandomCourse()]) // courses dizisine getRandomCourse fonksiyonu ile rasgele bir kurs eklenir.
  }

  const courseList = () => {
    return courses.map((singleCourse, index) => {
      return <Course key={index} courseName={singleCourse} />; // courses dizisindeki her bir eleman için Course componenti çağrılır.
    })
  }

  return (
    <div className="container ">
      <div className='row justify-content-center'>

        <div className='col-7 mt-2  text-center'>
          <button className='btn btn-primary ' onClick={handleClick}>Kurs Ekle
          </button>
        </div>


      </div>
      <div className='row d-flex flex-wrap justify-content-center'>
        {
          courseList()
        }
      </div>




    </div>
  );
}

export default App;
