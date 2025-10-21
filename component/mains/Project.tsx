import {useState} from "react";
import {StyledH3} from '../Styles/Styles.tsx';
import styled from 'styled-components';

const CalcWrapper = styled.section`
  padding: 20px;
  max-width: 600px;
  margin: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

const CalcInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const CalcLabel = styled.label`
  font-size: calc(14px + 0.3vw);
  font-weight: 600;
`;

const CalcInput = styled.input`
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: calc(14px + 0.2vw);

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const CalcButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

const CalcButton = styled.button`
  flex: 1 1 80px;
  padding: 12px;
  font-size: calc(14px + 0.3vw);
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background: deepskyblue;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover { background: dodgerblue; }

  @media (max-width: 1000px) {
    flex: 1 1 auto;
    width: 100%;
  }
`;

const CalcOutput = styled.div`
  font-size: calc(16px + 0.3vw);
  font-weight: 600;
  text-align: center;

  h3 {
    margin-top: 10px;
    color: darkblue;
  }
`;

export default function Pro(){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [output, setOutput] = useState("");

    const n1 = Number(one);
    const n2 = Number(two);

    function doAdd() {
        setOutput(String(n1 + n2));
    }
    function doSubtract() {
        setOutput(String(n1 - n2));
    }
    function doMultiply() {
        setOutput(String(n1 * n2));
    }
    function doDivide() {
        if (two === "" || n2 === 0) {
            setOutput("Cannot divide by zero!");
        } else {
            setOutput(String(n1 / n2));
        }
    }
    function doPower() {
        setOutput(String(n1 ** n2));
    }
    function doClear() {
        setOne("");
        setTwo("");
        setOutput("");
    }

    return (
        <CalcWrapper>
            <StyledH3>Calculator</StyledH3>

            <CalcInputs>
                <CalcLabel htmlFor="one">Give a number:</CalcLabel>
                <CalcInput id="one" value={one} onChange={e => setOne(e.target.value)} inputMode="decimal" />

                <CalcLabel htmlFor="two">Give a second number:</CalcLabel>
                <CalcInput id="two" value={two} onChange={e => setTwo(e.target.value)} inputMode="decimal" />
            </CalcInputs>

            <CalcButtons>
                <CalcButton onClick={doAdd}>+</CalcButton>
                <CalcButton onClick={doSubtract}>-</CalcButton>
                <CalcButton onClick={doMultiply}>*</CalcButton>
                <CalcButton onClick={doDivide}>/</CalcButton>
                <CalcButton onClick={doPower}>**</CalcButton>
                <CalcButton onClick={doClear}>Clear</CalcButton>
            </CalcButtons>

            <CalcOutput>
                <label>Output:</label>
                <StyledH3>{output}</StyledH3>
            </CalcOutput>
        </CalcWrapper>
    );
}