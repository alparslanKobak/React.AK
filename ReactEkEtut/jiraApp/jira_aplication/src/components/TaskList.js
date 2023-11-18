import TaskCard from "./TaskCard";

function TaskList(props) {


    const TaskYokEt = (taskId) => {
        props.taskSil(taskId)
        
    }

    return (
        <>
            {
                props.tasklar.map((task) => {
                    return (
                        <TaskCard task={task} key={task.id} taskSil={TaskYokEt} onUpdate={props.onUpdate} />
                    )
                })
            }
        </>

    );
}

export default TaskList;