import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { task } from '../../../store/tasks';
import './GridTask.css';

const GridTask: React.FC<{ task: task }> = (props) => {
  return (
    <li className='grid-task task'>
      <div className='grid-task__content'>
        <div className='grid-task__info'>
          <input
            className='task__checkbox'
            type='checkbox'
            id={`check-grid-task${props.task.id}`}
          />
          <label className='task__title line-clamp' htmlFor={`check-grid-task${props.task.id}`}>
            {props.task.title}
          </label>
          {props.task.text ? <p className='grid-task__text line-clamp'>{props.task.text}</p> : <p className='grid-task__text empty line-clamp'>Добавьте описание задачи</p>}
        </div>
        <div className='grid-task__row'>
          <a className='task__link' href='/'>
            Подробнее...
          </a>
          <div className='task__controls'>
            <button className='task__btn task__btn--edit' type='button'>
              <span className='sr-only'>Редактировать задачу</span>
              <FiEdit size={20} />
            </button>
            <button className='task__btn task__btn--remove' type='button'>
              <span className='sr-only'>Удалить задачу</span>
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridTask;
