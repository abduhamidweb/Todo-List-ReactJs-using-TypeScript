import React from 'react';
import { ITask } from '../Interface';
interface Props {
  task: ITask;
  competeTask( taskNameToDelete: string):void
}
const Table = ({ task, competeTask }: Props) => {
  return (
    <>
      <tr>
        <th scope='row'>1</th>
        <td>{task.taskName}</td>
        <td>{task.deadLine}</td>
        <td><button className='btn btn-danger' type='button' onClick={() => { competeTask(task.taskName) }}>X</button></td>
      </tr>
    </>
  )
};

export default Table;