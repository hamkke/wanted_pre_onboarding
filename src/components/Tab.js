import React from "react";
import styled from "styled-components";

const Tab = () => {
  const [num, setNum] = React.useState(0);
  const tabMenu = ["안녕🌸", "하세🌷", "요🌼"];

  return (
    <div className="box">
      <TabBox>
        <TabUl>
          {tabMenu.map((i, idx) => {
            return (
              <TabLi
                key={idx}
                onClick={() => {
                  setNum(idx);
                }}
              >
                {tabMenu[idx]}
              </TabLi>
            );
          })}
        </TabUl>
        <AniBox>
          <AniBar location={num}></AniBar>
        </AniBox>
        <TabCon>{tabMenu[num]}</TabCon>
      </TabBox>
    </div>
  );
};

const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;
const TabUl = styled.ul`
  display: flex;
  width: 100%;
  height: 5vh;
  justify-content: space-between;
`;
const TabLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 100%;
  border: 1px solid black;
  list-style: none;
`;
const TabCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  border: 1px solid black;
`;

const AniBox = styled.div`
  position: relative;
  width: 100%;
  height: 1vh;
  border: 1px solid black;
`;
const AniBar = styled.span`
  position: absolute;
  left: ${(props) => {
    return props.location * 33.3 + "%";
  }};
  width: 33.4%;
  height: 100%;
  background-color: black;
  transition: all 0.5s;
`;

export default Tab;
