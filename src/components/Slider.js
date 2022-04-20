import React from "react";
import styled from "styled-components";

const Slider = () => {
  const num = [1, 25, 50, 75, 100];
  const [range, setRange] = React.useState(0);

  return (
    <div className="box">
      <SliderBox>
        <TxtBox>🌸{range}%🌸</TxtBox>
        <AniBox>
          <AniBar>
            <AniCuruentBar width={range}></AniCuruentBar>
            <AniRound location={range}></AniRound>
            <Input
              id="qwe"
              type="range"
              min="0"
              max="100"
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
          </AniBar>
          <NumBox>
            {num.map((i, idx) => {
              return (
                <NumList
                  key={idx}
                  onClick={(e) => {
                    setRange(e.target.firstChild.data);
                  }}
                >
                  {i}
                </NumList>
              );
            })}
          </NumBox>
        </AniBox>
      </SliderBox>
    </div>
  );
};

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;
const TxtBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  border: 1px solid red;
  font-size: 30px;
`;
const AniBox = styled.div`
  margin-top: 2vh;
  width: 100%;
  height: 10vh;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  z-index: 1;
`;
const AniBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 1vh;
  border: 1px solid red;
  border-radius: 10px;
`;
const AniCuruentBar = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: rgb(196, 255, 206);
  border-radius: 10px;
`;
const AniRound = styled.div`
  position: absolute;
  top: -50%;
  left: ${(props) => props.location - 1}%;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;
`;
const NumBox = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const NumList = styled.li`
  margin-top: 10px;
  font-size: 20px;
  list-style: none;

  &:hover {
    font-weight: bold;
  }
`;
export default Slider;
