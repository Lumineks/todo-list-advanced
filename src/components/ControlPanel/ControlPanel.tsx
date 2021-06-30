import Header from "../Header/Header";
import { AiOutlineUnorderedList, AiOutlinePlus } from "react-icons/ai";
import classes from "./ControlPanel.module.css";
import Groups from "./Groups/Groups";

const ControlPanel: React.FC = () => {
  return (
    <div className={classes.controlPanel}>
      <Header />

      <div className={classes.controls}>
        <div className={classes.groups}>
          <a className="icon">
            <AiOutlineUnorderedList size={24} /> <span>Все задачи</span>
          </a>

          <Groups />

          <a className="icon">
            <AiOutlinePlus size={24} /> <span>Добавить группу</span>
          </a>
        </div>

        <div className={classes.add}>
          <button className={`${classes.addBtn} icon focus:ring-2 ring-green-500 ring-offset-2 focus:scale-105 transform`} type='button'>
            <AiOutlinePlus size={24} />
            <span>Новая задача</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
