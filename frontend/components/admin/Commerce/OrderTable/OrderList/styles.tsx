import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  font-family: ${props => props.theme.font.TitleFont};
  h2 {
    font-size: 30px;
    margin-bottom: 40px;
    text-align: center;
    font-family: ${props => props.theme.font.TitleFont};
  }
  .button-div {
    display: flex;
    justify-content: center;
  }
  .button-style {
    font-family: ${props => props.theme.font.EnglishFont};
    padding: 10px;
    border: 1px solid grey;
    margin: 10px;
    width: 140px;
    border-radius: 5px;
    background-color: ${props => props.theme.color.whiteGray};
    :hover {
      background-color: ${props => props.theme.color.darkGray};
    }
    &.active {
      background-color: #9b9b9b;
      border: 1px solid black;
    }
  }
  .confirm-button {
    padding: 10px;
    border: 1px solid grey;
    margin: 10px;
    width: 100px;
    border-radius: 5px;
    :hover {
      background-color: ${props => props.theme.color.darkGray};
    }
  }
  .button-confirm {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
