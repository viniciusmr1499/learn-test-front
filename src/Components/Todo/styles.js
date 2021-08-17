import styled from 'styled-components';

const Container = styled.div`
  // border: 1px solid ${(props) => props.border};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .block {
    display: flex;
  }
`;

export {
  Container,
}