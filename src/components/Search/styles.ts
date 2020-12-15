import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
  margin-top: 20px;

  input {
    height: 32px;
    border: none;
    border-radius: 4px;
    flex: 1;
  }

  input::placeholder {
    font-family: 'PT Sans', sans-serif;
    font-style: italic;
    font-size: 14px;
  }

  @media screen and (min-width: 767px) {
    width: 50%;
    margin-top: 20px;
  }
`;
