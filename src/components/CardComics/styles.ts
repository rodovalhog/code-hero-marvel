import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: #fff;
  box-shadow: 1px 0px 5px #555555;
  margin: 20px;
  div {
    overflow: hidden;
    position: relative;
    line-height: 1;
    background: #151515;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    padding: 16px 24px 17px 20px;
    z-index: 30;
    height: 145px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  figure {
    height: 210px;
    position: relative;
    overflow: hidden;
    &:after {
      height: 4px;
      content: '';
      background-color: #e62429;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    img {
      display: block;
      margin: 0;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center center;
      object-position: center center;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0px 5px #555555;

    background-color: white;
    border-radius: 4px;

    h3 {
      color: #fff;
    }

    img {
      width: 100%;
      align-items: center;
      margin: auto;
      margin-top: 10px;
    }
  }
`;
