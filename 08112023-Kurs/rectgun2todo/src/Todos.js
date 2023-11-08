import React, { useState } from "react";

function Todos() {

    // const [count, setCount] = useState(0)
    const [toDo, setTodo] = useState('');
    const [toDoList, setTodoList] = useState([])



    function AddToDo() {

        if (toDo) {
            setTodoList([...toDoList, toDo]); // Bu kullanımda, (... [Liste ismi], [yeni eklenecek eleman]) Git ve tüm listeyi dolaş, ardından bu son elemanı içeri pushla
            setTodo('')
        }
    }

    function DeleteToDo (index){
        toDoList.splice(index,1)
    }


    return (
        <div className="container-fluid bg-dark text-bg-dark">

            <div className="row mt-2 mb-3">

                <div className="col-7 bg-warning text-bg-warning">

                    <input value={toDo} placeholder="Görev Gir" className="form-control" onChange={(e) => setTodo(e.target.value)} type="text" />
                </div>
                <div className="col-3">
                    <button onClick={AddToDo} className="btn btn-primary" >Ekle</button>
                </div>


            </div>
            <div className="row mt-2 p-3">

                <h2>Görevler</h2>
                <ul className="list-group">
                    {

                        toDoList.map((toDo, index) =>


                            <li className="list-group-item m-3 bg-light text-bg-light row" >
                                <div className="col-8 text-start">
                                    {toDo}
                                </div>
                                <div className="col-4 text-end">
                                    <button  className=" ms-5 btn btn-outline-danger">
                                        Sil
                                    </button>
                                </div>


                            </li>

                        )

                    }

                </ul>

            </div>



        </div>
    )

}

export default Todos;