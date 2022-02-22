import { FormEvent, useState } from "react";
import addImg from "../../assets/add.svg";
import deleteImg from "../../assets/delete.svg";
import { Container } from "./styles";

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

    setTitle('');
    setTaskId(taskId + 1);
    setIsTaskCompleted(isTaskCompleted);

    setTasks([...tasks, { id: taskId, name: title, isComplete: isTaskCompleted }]);
  }

  return (
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
          <>
            <div className="new-task" key={task.id}>
              <div className="info-group">
                <input type="checkbox" className="task-checkbox" />
                <p>{task.name}</p>
              </div>
              <button>
                <img src={deleteImg} alt="Deletar task" />
              </button>
            </div>
            <hr />
          </>
        ))}
      </main>
    </Container>
  );
}
