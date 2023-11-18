
import { useState } from 'react';

function TaskCreate(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const task = props.task;
    const taskFormUpdate = props.taskFormUpdate;


    const inputTitleHandler = (event) => {
        setTitle(event.target.value)
    }
    const inputDescHandler = (event) => {
        setDescription(event.target.value)
    }





    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            props.onUpdate(task.id, title, description)
        }
        else{
            props.onCreate(title, description)
        }

        
        setTitle('')
        setDescription('')

    }

    

    return (
        <div className="row justify-content-center text-center">

            {taskFormUpdate ?
                <form className="mt-2" onSubmit={handleFormSubmit} >
                    <h3>Please Update The Task!</h3>
                    <div className="form-floating col-12 m-2">
                        <input
                            type="text"
                            className="shadow form-control rounded-5 text-center" placeholder="Title"
                            value={title}
                            onChange={inputTitleHandler}
                        />
                        <label >Update The Title :  </label>
                    </div>



                    <div className="form-floating col-12 m-2 mt-3">
                        <textarea
                            className="shadow form-control" placeholder="Description"
                            value={description}
                            onChange={inputDescHandler}
                        ></textarea>
                        <label >Update The Description :  </label>
                    </div>

                    <button onClick={handleFormSubmit} className="btn btn-info m-2 shadow">Update</button>
                </form>
                :
                <form className="mt-2" onSubmit={handleFormSubmit} >

                    <h3 >Please Add A Task!</h3>
                    <div className="form-floating col-12 m-2">
                        <input
                            type="text"
                            className="shadow form-control rounded-5 text-center" placeholder="Title"
                            value={title}
                            onChange={inputTitleHandler}
                        />
                        <label >Title : </label>
                    </div>



                    <div className="form-floating col-12 m-2 mt-3">
                        <textarea
                            className="shadow form-control" placeholder="Description"
                            value={description}
                            onChange={inputDescHandler}
                        ></textarea>
                        <label >Description : </label>
                    </div>

                    <button onClick={handleFormSubmit} className="btn btn-success m-2 shadow">Create</button>
                </form>
            }

        </div>
    );
}

export default TaskCreate;