import "./App.css"
import Header from "./components/Header/Header";
import CreatNewTask from "./components/CreatNewTask/CreatNewTask";


const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <CreatNewTask />
      </section>
    </div>
  );
};

export default App;
