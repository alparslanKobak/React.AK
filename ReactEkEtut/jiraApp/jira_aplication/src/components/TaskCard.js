import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskCard(props) {


    const task = props.task;

    const TaskYokEt = (taskId) => {
        props.taskSil(taskId)
    }

    const [showEdit, setShowEdit] = useState(false)


    const handleEdit = () => {
        setShowEdit(!showEdit)
    }


    const handleUpdate = (taskId, taskTitle, taskDescription) => {
        setShowEdit(false)
        props.onUpdate(taskId, taskTitle, taskDescription)
    }



    return (
        <div className="card rounded-4 text-center col-3 m-4 shadow border border-black" >
            <div className="card-body">

                {showEdit ? <>
                    <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleUpdate} />
                </> :
                    <>
                        {/* Güncelleme Modununu aktif olmaması halinde gösterilecek içerik */}
                        <h5 className="card-title text-danger fw-bold fst-italic"> {task.id} - {task.title}</h5>
                        <hr />
                        <p className="card-text">{task.description}</p>
                        <hr />
                        <button onClick={() => TaskYokEt(task.id)} className="btn btn-outline-danger me-3">Sil</button>
                        <button onClick={handleEdit} className="btn btn-outline-primary">Güncelle</button>
                    </>}
            </div>
        </div>
    );
}

export default TaskCard;