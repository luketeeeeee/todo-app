import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;

  h2 {
    font-weight: 600;
    font-size: 1.65rem;
  }

  #input-area {
    display: flex;
    
    input {
      margin-right: 0.5rem;
      padding-left: 0.75rem;
      height: 40px;
      width: 200px;
      border: none;
      border-radius: 0.5rem;
      background: lightgray;
    }

    input::placeholder {
      font-size: 1rem;
    }

    input[type=text] {
      font-size: 1rem;
    }

    button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 0.5rem;
      background: var(--green);
    }
  }
`;