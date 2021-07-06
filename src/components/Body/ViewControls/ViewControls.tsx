import { BsList, BsGrid } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { uiActions } from '../../../store/ui';

const ViewControls: React.FC = (props) => {
  const state = useAppSelector((state) => state.ui.isGridView);
  const dispatch = useAppDispatch();

  const toggleGridHandler = () => {
    if (!state) dispatch(uiActions.toggleGrid());
  };

  const toggleListHandler = () => {
    if (state) dispatch(uiActions.toggleList());
  };

  return (
    <div>
      <div className='App__btns'>
        <button
          className={`btn-view btn-view--list ${state ? '' : 'active'}`}
          onClick={toggleListHandler}
          type='button'>
          <span className="sr-only">Изменить вид на список</span>
          <BsList size={24} />
        </button>
        <button
          className={`btn-view btn-view--grid ${state ? 'active' : ''}`}
          onClick={toggleGridHandler}
          type='button'>
          <span className="sr-only">Изменить вид на сетку</span>
          <BsGrid size={20} />
        </button>
      </div>
    </div>
  );
};

export default ViewControls;
