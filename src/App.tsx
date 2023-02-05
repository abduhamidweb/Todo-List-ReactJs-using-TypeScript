import { useState, FC, ChangeEvent } from 'react'
import './App.css'
import { ITask } from './Interface';
import Table from './Components/Table';
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [dedline, setDedline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);


  const handlerChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name == "task") {
      setTask(e.target.value)
    } else {
      setDedline(Number(e.target.value));
    }
  }
  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: dedline };
    setTodo([...todo, newTask])
    setTask("");
    setDedline(0)
  }
  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter(task => task.taskName != taskNameToDelete))
  }



  return (
    <>
      <div className="header">
        <div className="input_container p-5 m-5">
          <input type="text" placeholder='Task...' className='form-control mt-2' name='task' onChange={handlerChange} value={task} />
          <input type="number" placeholder='Dedline (in Days)...' className='form-control mt-2' onChange={handlerChange} value={dedline} />
          <button type='button' value={dedline} className='text-light form-control btn btn-info mt-3' onClick={addTask}>Add Tasks</button>
        </div>
      </div>
      <div className="todoList">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">deadline</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {
              todo.map((task: ITask, key: number) => {
                return <Table task={task} key={key} competeTask={completeTask}/>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
