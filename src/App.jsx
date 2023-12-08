import "./App.css"
import Header from "./components/Header/Header";
import CreatNewTask from "./components/CreatNewTask/CreatNewTask";
import TodayTask from "./components/TodayTask/TodayTask";


const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <CreatNewTask />
        <TodayTask/>
      </section>
    </div>
  );
};

export default App;


