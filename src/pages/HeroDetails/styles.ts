import styled from 'styled-components';

export const Container = styled.div`
  img {
    max-width: 100%;
  }
  h1 {
    text-align: center;
    background-color: #555555;
    color: #fff;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: left;
    padding: 10px;
  }
  @media screen and (min-width: 767px) {
    img {
      max-width: 33%;
    }
    div {
      display: flex;
      background-color: #555555;
      justify-content: space-around;
    }

    h1 {
      text-align: center;

      color: #fff;
      font-size: 72px;
    }
    p {
      text-align: left;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin: 20px;
    }

    .information {
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      margin-right: 40px;
    }
    .comic-card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #fff;
    }
  }
`;
