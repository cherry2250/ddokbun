import styled from "styled-components";
interface Props {
  mypage?: boolean;
}
export const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.mypage ? "150vh" : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  section {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  section > header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  section > main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  section > footer {
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  input {
    text-align: center;
    border-width: 1px;
    width: fit-content;
    font-size: 16px;
    width: 20%;
    font-family: ${props => props.theme.font.TextFont2};
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    section {
      width: 80%;
    }
    section > header {
      font-size: 14px;
      word-break: keep-all;
    }
  }
`;
