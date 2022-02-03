import { Container } from "./styles";

import deleteImg from "../../assets/delete.svg";

export function TaskList() {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                type="checkbox"
                name="todo-checkbox"
                className="todo-checkbox"
                defaultChecked={false}
              />
            </td>
            <td>Beber água</td>
            <td>
              <button>
                <img src={deleteImg} alt="Deletar tarefa" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
