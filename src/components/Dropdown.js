import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  const [text, setFilter] = React.useState("");
  const [listOpen, setListOpen] = React.useState(false);
  const [title, setTitle] = React.useState("All");
  const listItem = [
    "안녕하세요",
    "✨",
    "반가워여!",
    "✨✨",
    "안녕안녕하세요",
    "반가워요",
    "A",
    "AA",
    "ABC",
  ];

  return (
    <div className="box">
      <DropBox>
        <TxtBox
          onClick={() => {
            setListOpen(true);
          }}
        >
          <h2>{title}</h2>
          <MdArrowDropDown className="ic_arrow"></MdArrowDropDown>
        </TxtBox>
        {listOpen ? (
          <MenuBox>
            <ImSearch className="ImSearch"></ImSearch>
            <input
              placeholder="검색어를 입력하세요"
              type="text"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />

            <ul>
              {listItem
                .filter((i) => {
                  if (text === "") {
                    return i;
                  } else if (i.toLowerCase().includes(text.toLowerCase())) {
                    return i;
                  }
                  return false;
                })
                .map((i, idx) => {
                  return (
                    <li
                      key={idx}
                      className="sym-click"
                      onClick={() => {
                        setTitle(i);
                        setListOpen(false);
                      }}
                    >
                      {i}
                    </li>
                  );
                })}
            </ul>
          </MenuBox>
        ) : (
          <></>
        )}
      </DropBox>
    </div>
  );
};

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  width: 60%;
`;
const TxtBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid black;

  & .ic_arrow {
    font-size: 40px;
  }
`;
const MenuBox = styled.div`
  position: relative;
  border: 1px solid black;
  width: 100%;
  height: 100%;

  & input {
    padding: 10px 10px 10px 50px;
    width: 100%;
    background-color: #eee;
    border: none;
    border-bottom: 1px solid rgb(95, 95, 95);
  }
  & .ImSearch {
    position: absolute;
    top: 10px;
    left: 3%;
    font-size: 16px;
  }
  & li {
    padding: 10px;
    font-size: 14px;
    list-style: none;
  }
`;

export default Dropdown;
