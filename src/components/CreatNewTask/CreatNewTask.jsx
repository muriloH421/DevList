import { useState } from "react";
import Title from "../Title/Title";
import styles from "./CreatNewTask.module.css";

import addIcon from "../../assets/icon-add.svg"

const CreatNewTask = () => {
  const [inputValue,setInputValue] = useState("");
  const handleSubmit = (e) => {

    e.preventDefault();
    if(inputValue.length){

      setInputValue("")
    }
  };
  const handleChange = (e) => {
setInputValue(e.target.value)
  }
  return (
    <div className={styles.container}>
      <Title iconName={"pencil"} text={"Criar nova tarfa"} />

      <form onSubmit={handleSubmit} action="" className={styles.inputContainer}>
        <input
          className={styles.inputText}
          type="text"
          autoFocus
          placeholder="nome da tarefa"
          value={inputValue}
          onChange={handleChange}
        />

        <button className={styles.addButton} type="submit">
<img src={addIcon} alt="adicinar tarefa" />
        </button>
        
      </form>
    </div>
  );
};

export default CreatNewTask;
