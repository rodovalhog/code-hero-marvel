import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 16px;
  margin-bottom: 16px;

  img {
    width: 100%;
    max-width: 96px;
    max-height: 24px;
  }
  section {
    display: flex;
    text-align: right;
    align-items: center;
  }
  p {
    font-size: 12px;
  }
  h4 {
    font-size: 12px;
  }
  h2 {
    font-size: 15px;
  }

  span {
    padding-right: 16px;
  }

  div {
    border-radius: 4px;
    background-color: #f5f5f5;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
