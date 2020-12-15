import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #00000033;
  margin-bottom: 8px;

  .header-card {
    width: 100%;
  }

  .image-card {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-right: 0px;
    margin-left: 16px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  p {
    text-align: left;
  }

  .name-card {
    margin-left: 24px;
  }

  h4 {
    font-size: 14px;
    margin-left: 24px;
  }
  img {
    width: 48px;
    height: 48px;
  }

  .series-card,
  .events-card {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  div {
    width: 33%;
  }
  @media screen and (max-width: 767px) {
    div {
      width: 100%;
    }
    .series-card,
    .events-card {
      display: none;
    }
  }
`;
