import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Container, CreditText } from "./styles";
import 'react-toastify/dist/ReactToastify.css';

import addImg from "../../assets/add.svg";
import deleteImg from "../../assets/delete.svg";

type Task = {
  id: number;
  name: string;
  isComplete: boolean;
}

export function Main() {
  const [title, setTitle] = useState('');
  const [taskId, setTaskId] = useState(0);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (/^\s*$/.test(title)) {
      toast.info("Dê um nome à tarefa!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    setTitle('');
    setTaskId(taskId + 1);
    setIsTaskCompleted(isTaskCompleted);

    setTasks([...tasks, { id: taskId, name: title, isComplete: isTaskCompleted }]);
  }

  function handleRemoveTask(taskId: number) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);

    setTasks(newTaskList);
  }

  return (
    <>
      <Container>
        <form onSubmit={handleCreateNewTask} autoComplete="off">
          <h2>minhas tasks</h2>

          <div>
            <input
              type="text"
              id="task-title-input"
              placeholder="nome da task"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <button type="submit" >
              <img src={addImg} alt="Adicionar task" />
            </button>
          </div>
        </form>

        <main>
          {tasks.map(task => (
            <div key={task.id}>
              <div className="new-task">
                <div className="info-group">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    onChange={() => {
                      if (task.isComplete === false) {
                        setIsTaskCompleted(task.isComplete = true);
                      } else {
                        setIsTaskCompleted(task.isComplete = false);
                      }
                    }}
                  />
                  <p>{task.name}</p>
                </div>
                <button onClick={() => handleRemoveTask(task.id)}>
                  <img src={deleteImg} alt="Deletar task" />
                </button>
              </div>
              <hr />
            </div>
          ))}
        </main>
        <ToastContainer />
      </Container>
      <CreditText>
        made by lukete
      </CreditText>
    </>
  );
}
