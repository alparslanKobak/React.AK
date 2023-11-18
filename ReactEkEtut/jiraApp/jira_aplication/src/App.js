
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasklarim, setTasklarim] = useState([])
  const [count, setCount] = useState(0)

  const createTask = (taskTitle, taskDescription) => {
    const newTask = { id: (count + 1), title: taskTitle, description: taskDescription }
    setTasklarim([...tasklarim, newTask])
    setCount(count + 1)
  }

  const deleteTask = (taskId) => {
    const newTaskList = tasklarim.filter((task) => task.id !== taskId)
    setTasklarim(newTaskList)
  }

  const editTaskById = (taskId, taskTitle, taskDescription) => {
    const updatedTasks = tasklarim.map((task) => {
      if (task.id === taskId) {
        return {
          id:taskId, title: taskTitle, description: taskDescription
        }
      }
      else {
        return task
      }
    }
    )

    setTasklarim(updatedTasks)

  }

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <div className="col-8">
          <h1 className="text-center">Task Manager</h1>
          <TaskCreate onCreate={createTask} />

        </div>

        <div className='col-12 mt-5'>

          <div className='row justify-content-center border border-secondary-subtle p-5 rounded-5 shadow'>
            <TaskList tasklar={tasklarim} taskSil={deleteTask} onUpdate={editTaskById} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
