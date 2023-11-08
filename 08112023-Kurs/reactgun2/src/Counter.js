import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(5);
    const [congrats, setCongrats] = useState("")

    function increment() {
        if (count >= 10) {
            alert('Daha fazla Artış gerçekleştiremezsiniz.')
        }
        else {
            setCount(count + 1);
        }

    }

    function decrement() {

        if (count <= 0) {
            alert("Daha fazla düşüremezsiniz.")
        }
        else {

            setCount(count - 1);
        }




    }

    return (

        <div className='bg-dark text-bg-dark p-5 rounded-5'>
            <p className='btn btn-warning'>Count :
                <p className='btn btn-danger ms-3'>{count}</p></p> <hr />
            <button className='m-2 btn  btn-outline-success shadow-lg' onClick={increment} >Increment</button>
            <button className='m-2 btn btn-outline-danger' onClick={decrement}>Decrement </button>
        </div>

    );
}

export default Counter;