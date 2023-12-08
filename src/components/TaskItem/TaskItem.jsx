import { useContext } from "react";
import styles from "./TaskItem.module.css";
import { AppContext } from "../../AppContent";

const TaskItem = ({ task }) => {
  const { handleTaskEdit, handleTaskDelete } = useContext(AppContext);
  return (
    <li className={styles.container}>
      <label>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          checked={task.done}
          onChange={(e) => handleTaskEdit(task.id, e.target.checked)}
        />
        <div
          className={`${styles.customCheckbox}${
            !task.done && styles.customCheckboxCheck
          }`}
        >
          {task.done && (
            <div className={styles.customCheckboxChecked}>
              <img src={checkedIcon} alt="Icone de marcação" />
            </div>
          )}
        </div>
      </label>

<span className={styles.taskName}>{task.name}</span>
<button className={styles.trashButton}>
  
</button>

    </li>
  );
};

export default TaskItem;
