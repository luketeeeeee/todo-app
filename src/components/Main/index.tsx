import { TaskInput } from "../TaskInput";
import { TaskList } from "../TaskList";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <TaskInput />
      <TaskList />
    </Container>
  );
}
