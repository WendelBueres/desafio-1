import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --background: #f5f7fa;
        
        /** Div Requisição */
        --title-color: #656565;
        --text-color: #989898;
        --border-input: #aad2f3;
        --hint-color: #d9d9d9;

        /** Div response */
        --background-response: #f7f9fa;
        --title-response: #4178bc;
        --text-response: #9cc2f2;
        --values-response: #71a8ee;
    }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 66vw;
  overflow: auto;
  margin: 10px;
`;

export const DivRequest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 55%;
  padding: 0cm 15px;
  border-radius: 6px 0 0 6px;
  border-top: #d7e1e7 solid 2px;
  border-left: #d7e1e7 solid 2px;
  border-bottom: #d7e1e7 solid 2px;
  padding-top: 1.5em;
  padding-bottom: 2.5em;
  justify-content: space-between;
`;

export const DivResponse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);
  width: 45%;
  padding: 30px 14px;
  border-radius: 0 6px 6px 0;
  border-top: #d7e1e7 solid 2px;
  border-right: #d7e1e7 solid 2px;
  border-bottom: #d7e1e7 solid 2px;

  h2 {
    display: flex;
    font-weight: bold;
    color: #487dbf;
    margin-bottom: 0.8em;
    flex-wrap: nowrap;
    font-size: calc(6px + 1vmin);
    text-align: center;
    font-style: italic;
    box-shadow: 0 1.5px #e7eff8;
    width: 98%;

    @media (min-width: 1050px) {
      font-size: calc(10px + 1vmin);
    }

    @media (min-width: 1192px) {
      font-size: calc(12px + 1vmin);
    }
  }

  #divPai {
    display: grid;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    overflow-y: auto;
    overflow-x: auto;
  }
`;

export const InputText = styled.input`
  display: flex;
  font-size: 0.7em;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  border: #eef2f4 solid;
  width: 84%;
  :focus {
    outline-color: #cbe4f8;
  }
`;

export const Label = styled.label`
  color: #9a9a9a;
  font-weight: 500;
  display: flex;
  width: 93%;
  font-size: calc(8px + 1vmin);
  text-align: center;
  justify-content: center;
  margin-bottom: 1px;

  @media (min-width: 676px) {
    text-align: start;
  }

  @media (min-width: 806px) {
    text-align: start;
    font-size: calc(11px + 1vmin);
    justify-content: start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: 79%;
  height: 100%;
  justify-content: space-between;

  h1 {
    display: flex;
    font-weight: bold;
    color: #656565;
    margin-bottom: 0.8em;
    flex-wrap: nowrap;
    font-size: calc(12px + 1vmin);
    text-align: center;

    @media (min-width: 885px) {
      font-size: calc(16px + 1vmin);
    }

    @media (min-width: 1080px) {
      font-size: calc(20px + 1vmin);
    }
  }

  p {
    font-size: 0.6em;
    color: #d7d7d7;
    font-weight: 500;
    width: 92%;
    margin-top: 0cm;
    text-align: center;
    @media (min-width: 888px) {
      text-align: start;
      width: auto;
    }
  }
`;

export const TextResponse = styled.div`
  display: flex;
  flex-direction: row;
  width: 21vw;
  align-items: flex-end;

  p {
    display: flex;
    font-weight: bold;
    color: #8cb8f0;
    margin-bottom: 0.8em;
    flex-wrap: nowrap;
    font-size: calc(6px + 1vmin);
    text-align: start;
    font-style: italic;

    @media (min-width: 885px) {
      font-size: calc(10px + 1vmin);
    }

    @media (min-width: 1080px) {
      font-size: calc(12px + 1vmin);
    }
  }

  span {
    display: flex;
    font-weight: bold;
    color: #70a7ed;
    margin-left: 5px;
    margin-bottom: 0.8em;
    flex-wrap: nowrap;
    font-size: calc(6px + 1vmin);
    text-align: center;
    font-style: italic;

    @media (min-width: 885px) {
      font-size: calc(10px + 1vmin);
    }

    @media (min-width: 1080px) {
      font-size: calc(12px + 1vmin);
    }
  }
`;

export default Global;
