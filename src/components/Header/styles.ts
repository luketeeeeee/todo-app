import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background: var(--header);
  height: 215px;
  width: 100%;

  h1 {
    font-weight: 400;
    font-size: 2.6rem;
    color: white;
    margin: 1.8rem auto 0;
    max-width: 800px;
  }
`;