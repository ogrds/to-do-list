import { useState } from "react";
import "./App.scss";
import tasks from "./itens.json";

interface Tasks {
  id: number;
  task: string;
  status: boolean;
}

function App() {
  const [finishedTasks, setFinishedTasks] = useState<Tasks[]>(tasks);

  const endTask = (i: number) => {
    const newTasks = finishedTasks.map(({ id, task, status }, key) => {
      if (key === i) {
        return {
          id,
          task,
          status: true,
        };
      }
      return {
        id,
        task,
        status,
      };
    });

    setFinishedTasks(newTasks);
  };

  return (
    <div className="container">
      <header>
        <h1>To do List</h1>
      </header>
      <main>
        <section>
          <span>A realizar:</span>
          <ul>
            {finishedTasks.map(({ id, task, status }, i) => {
              if (!status) {
                return (
                  <li key={id}>
                    <label htmlFor={id.toString()}>
                      <input
                        onChange={() => endTask(i)}
                        type="checkbox"
                        id={id.toString()}
                        disabled={status}
                      />
                      {task}
                    </label>
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <div className="divider"></div>
        <section>
          <span>Concluídas:</span>
          <ul>
            {finishedTasks.map(({ id, task, status }, i) => {
              if (status) {
                return (
                  <li key={id} className={status ? "taskFinished" : ""}>
                    <label htmlFor={id.toString()}>
                      <input
                        type="checkbox"
                        disabled={true}
                      />
                      {task}
                    </label>
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
