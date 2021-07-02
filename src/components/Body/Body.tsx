import Task from '../Task/SingleTask';
import { useAppSelector } from '../../store/hooks';

const Body: React.FC = () => {
  const state = useAppSelector((state) => state.tasks);

  const tasks = state.map((task) => <Task task={task} key={task.id} />);
  return (
    <div>
      <ul>{tasks}</ul>
    </div>
  );
};

export default Body;
