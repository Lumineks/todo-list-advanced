import { useAppSelector } from '../../store/hooks';
import ViewControls from './ViewControls/ViewControls';
import GridTask from '../Task/GridTask/GridTask';
import ListTask from '../Task/ListTask/ListTask';
import '../Task/Task.css';

const Body: React.FC = () => {
  const tasksState = useAppSelector((state) => state.tasks);
  const isGridView = useAppSelector((state) => state.ui.isGridView);

  let tasks = null;

  if (isGridView) tasks = tasksState.map((task) => <GridTask task={task} key={task.id} />);
  else tasks = tasksState.map((task) => <ListTask task={task} key={task.id} />);
  return (
    <div className='App__content'>
      <div className='App__top'>
        <h1 className='App__title'>Задачи</h1>
        <ViewControls />
      </div>
      <section className={`App__tasks ${isGridView && 'App__tasks--grid'}`}>
        <ul className={`App__list ${isGridView&& 'App__list--grid'}`}>{tasks}</ul>
      </section>
    </div>
  );
};

export default Body;
