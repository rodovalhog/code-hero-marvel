import styled from 'styled-components';

export const Container = styled.section`
  p {
    font-size: 12px;
    color: #8e8e8e;
  }
  div {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 767px) {
    .dn {
      display: none;
    }
  }

  .header-card {
    width: 100%;
    div {
      width: 33%;
      margin-left: 8px;
      margin-top: 40px;
      margin-bottom: 8px;
    }
  }

  img {
    width: 48px;
    height: 48px;
  }
  .personagem {
    display: flex;
  }
`;
