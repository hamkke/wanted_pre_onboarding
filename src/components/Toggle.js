import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const [onSwitch, setOnSwitch] = useState(true);

  const handleSwitch = () => {
    setOnSwitch(!onSwitch);
  };
  return (
    <div className="box">
      <ToggleBox>
        <ToggleSwitch className={onSwitch ? 'on' : 'off'}></ToggleSwitch>
        <ToggleBtn
          className="txt1"
          txtColor={onSwitch}
          onClick={() => {
            handleSwitch();
          }}
        >
          기본🌼
        </ToggleBtn>
        <ToggleBtn
          className="txt2"
          txtColor={onSwitch}
          onClick={() => {
            handleSwitch();
          }}
        >
          상세🌼
        </ToggleBtn>
      </ToggleBox>
    </div>
  );
};

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 90%;
  height: 10vh;
  border: 1px solid red;
  border-radius: 50px;
`;

const ToggleBtn = styled.button`
  width: 50%;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 30px;
  line-height: 3;
  text-align: center;
  outline: none;
  z-index: 1;
  &.txt1 {
    color: ${(props) => (props.txtColor ? 'red' : 'black')};
  }
  &.txt2 {
    color: ${(props) => (props.txtColor ? 'black' : 'red')};
  }
`;

const ToggleSwitch = styled.span`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: rgb(196, 255, 206);
  border-radius: 50px;
  transition: all 0.5s;
  &.on {
    left: 0;
  }
  &.off {
    left: 50%;
  }
`;
export default Tab;
