import { useContext } from "react";
import styles from "./TodayTask.module.css";
import { AppContext } from "../../AppContent";
import Title from "../Title/Title";
import TaskItem from "../TaskItem/TaskItem";

const TodayTask = () => {
  const { taskList, progressBarValue } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <Title iconName={"list"} text={"tarefas de hoje"} />
      {progressBarValue === 100 || taskList.length === 0 ? (
        <span className={styles.TodayTaskManssage}>
          {" "}
          Voce nao tem tarefas disponiveis
        </span>
      ) : (
        <ul className={styles.taskList}>
          {taskList.map(
            (task) => !task.done && <TaskItem key={task.id} task={task} />
          )}
        </ul>
      )}
    </div>
  );
};

export default TodayTask;
