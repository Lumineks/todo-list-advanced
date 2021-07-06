import { task } from '../../../store/tasks';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './ListTask.css';

const ListTask: React.FC<{ task: task }> = (props) => {
  return (
    <li className='list-task task'>
      <div className='list-task__info'>
        <input className='task__checkbox' type='checkbox' id={`check-task${props.task.id}`} />
        <label className='task__title line-clamp' htmlFor={`check-task${props.task.id}`}>
          {props.task.title}
        </label>

        {props.task.text && <p className='list-task__text line-clamp'>{props.task.text}</p>}
      </div>
      <div className='task__controls'>
        <a className='task__link' href='/'>
          Подробнее...
        </a>
        <button className='task__btn task__btn--edit' type='button'>
          <span className="sr-only">Редактировать задачу</span>
          <FiEdit size={20} />
        </button>
        <button className='task__btn task__btn--remove' type='button'>
          <span className="sr-only">Удалить задачу</span>
          <RiDeleteBin6Line size={20} />
        </button>
      </div>
    </li>
  );
};

export default ListTask;
