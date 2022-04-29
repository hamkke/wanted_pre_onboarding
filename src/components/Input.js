import React, { useState } from 'react';
import styled from 'styled-components';

import { ImRadioUnchecked, ImEye, ImEyeBlocked } from 'react-icons/im';

const Input = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(true);
  const [invalid, setInvalid] = useState(true);

  const checkEmail = (e) => {
    let regExpEmali = /^[A-Za-z0-9-_]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(
      e.target.value
    );
    let regExpInvalid = /.+(?=@)/.test(e.target.value);
    setEmail(regExpEmali);
    setInvalid(regExpInvalid);
    if (email === true && regExpInvalid === false) {
      setInvalid(false);
    }
    if (e.target.value === '') {
      setInvalid(true);
    }
  };

  const viewPassword = () => {
    password ? setPassword(false) : setPassword(true);
  };

  return (
    <div className="box">
      <InputBox>
        <TopBox>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => {
              checkEmail(e);
            }}
          />
          <ImRadioUnchecked
            className={email ? 'ic_check ic_check_on' : 'ic_check'}
          />
          <p className={!invalid ? 'invalid' : ''}>Invalid e-mali addres 👀</p>
        </TopBox>
        <BottomBox>
          <label htmlFor="password">Password</label>
          <input
            type={password ? 'password' : ''}
            id="password"
            placeholder="Password"
          />
          <IcEyeBox onClick={viewPassword}>
            {password ? <ImEyeBlocked></ImEyeBlocked> : <ImEye></ImEye>}
          </IcEyeBox>
        </BottomBox>
      </InputBox>
    </div>
  );
};

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const TopBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  & input {
    padding: 15px 10px;
    border: 1px solid black;
    font-size: 30px;
    outline: none;
  }

  & .ic_check {
    position: absolute;
    right: 3%;
    bottom: 18%;
    font-size: 40px;
  }

  & .ic_check_on {
    color: rgb(238, 81, 81);
  }

  & p {
    display: flex;
    position: absolute;
    left: 0;
    bottom: -22px;
    color: rgb(238, 81, 81);
    font-size: 20px;
    opacity: 0;
    transition: all 0.5s;
  }
  & p.invalid {
    opacity: 1;
    bottom: -30px;
  }
`;

const BottomBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  & input {
    padding: 15px 10px;
    border: 1px solid black;
    font-size: 30px;
    outline: none;
  }
`;

const IcEyeBox = styled.div`
  position: absolute;
  right: 3%;
  bottom: 18%;
  display: flex;
  font-size: 40px;
`;
export default Input;
