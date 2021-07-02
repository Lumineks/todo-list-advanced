import Header from '../Header/Header';
import { AiOutlineUnorderedList, AiOutlinePlus } from 'react-icons/ai';
import './ControlPanel.css';
import Groups from './Groups/Groups';

const ControlPanel: React.FC = () => {
  return (
    <div className='c-panel'>
      <Header />

      <div className='c-panel__controls'>
        <div className='c-panel__groups'>
          <a className='icon'>
            <AiOutlineUnorderedList size={24} /> <span>Все задачи</span>
          </a>

          <Groups />

          <a className='icon'>
            <AiOutlinePlus size={24} /> <span>Добавить группу</span>
          </a>
        </div>

        <button className='c-panel__addBtn icon' type='button'>
          <AiOutlinePlus size={24} />
          <span>Новая задача</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
