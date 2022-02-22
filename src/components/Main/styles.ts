import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: -6rem auto 0;
  padding: 3rem 4rem;
  background: white;
  border-radius: 0.75rem;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    h2 {
      font-weight: 600;
      font-size: 1.7rem;
    }

    div {
      display: flex;

      #task-title-input {
        height: 30px;
        width: 220px;
        margin-right: 0.2rem;
        padding: 1rem 0.3rem 1rem 0.7rem;
        border: none;
        border-radius: 0.25rem;
        background-color: lightgray;
      }

      button {
        width: 32px;
        border: none;
        border-radius: 0.35rem;
        background-color: var(--green);
      }
    }
  }

  main {
    .new-task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.8rem 0;

      .info-group {
        display: flex;
        align-items: center;

        input {
          height: 20px;
          width: 20px;
          margin-right: 0.5rem;
        }

        input:hover {
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
      }
    }

    hr {
      border: 1px solid lightgray;
    }
  }
`;