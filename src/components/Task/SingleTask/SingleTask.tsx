import { task } from '../../../store/tasks';
import './SingleTask.css';

const SingleTask: React.FC<{ task: task }> = (props) => {
  return (
    <div>
      <h3>{props.task.title}</h3>
      {props.task.text && <p>props.task.text</p>}
    </div>
  );
};

export default SingleTask;
