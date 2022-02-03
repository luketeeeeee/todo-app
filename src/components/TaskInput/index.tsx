import { Container } from "./styles";

import addTask from "../../assets/add.svg";

export  function TaskInput() {
  return (
    <Container>
      <h2>minhas tasks</h2>
      <div id="input-area">
        <input type="text" name="new-task" id="new-task" placeholder="nome da tarefa" />
        <button>
          <img src={addTask} alt="Botão de adicionar tarefa" />
        </button>
      </div>
    </Container>
  );
}
