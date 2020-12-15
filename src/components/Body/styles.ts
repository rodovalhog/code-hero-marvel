import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  background-color: #e5e5e5;
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    margin-right: 24px;
  }

  h2 {
    padding-top: 24px;
    font-size: 24px;
  }

  h3 {
    margin-bottom: 8px;
    margin-top: 24px;
    font-size: 14px;
  }
`;
