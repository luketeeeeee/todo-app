import { Container } from "./styles";

export function TaskList() {
  return (
    <Container>
      <input
        type="checkbox" 
        name="todo-checkbox" 
        className="todo-checkbox" 
        defaultChecked={false}/>
      <p className="name">Beber água</p>
    </Container>
  );
}
