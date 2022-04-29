# 원티드 프리온보딩 프론트엔드 코스 과제
[과제 안내 링크](https://miriya.notion.site/ad592b834cbb4b28ab015bfbf2c337b0)
## Getting Started

```
npm install
npm run start
```
사용 라이브러리: styled-components, react-icons, react-router-dom, styled-components

## 폴더 구조

```
/src
  App.js
  /components
    Toggle.js
    Tab.js
    Slider.js
    Input.js
    Dropdown.js
```



## 1. Tab
### ✔구현방법 
먼저 메뉴 배열을 만들고 map을 이용해 각각의 li에 값을 넣어 구현하였습니다. 
메뉴 탭을 클릭했을 때 state에 자신의 index값을 담고 
index값과 메뉴의 width 곱해 활성화된 메뉴에 위치해 있도록 하였습니다.

## 2. Toggle
### ✔구현방법 
두 가지의 선택지이기에 state에 boolean을 사용해 구현하였습니다.
true일 경우와 false인 경우 각각 다른 className을 주는 방법으로 구현하였습니다.

## 3. Input
### ✔구현방법 
email 유효성 검사를 위해 onChane를 이벤트를 통해 input의 value를 state에 값을 담고  
정규표현식을 사용해 반환되는 값(boolean)을 다른 state에 담아 
형식에 맞을 경우와 맞지 않는 경우 아이콘이 변경되도록 구현하였습니다.

비밀번호 경우는 삼항 연산자를 이용해 input의 type을 바꿔주도록 구현하였습니다.
<input type={password ? "password" : ""} />

## 4. Slider
### ✔구현방법 
input의 range를 이용해 구현했습니다.
input을 만들고 opacity를 주고 input을 덮는 bar를 만들어 기본 제공되는 동작을 활용해 구현했습니다.
input의 value를 state에 담아 버튼의 위치와 상단 텍스트가 변경되도록 하였습니다.

## 5. Dropdown
### ✔구현방법 
검색어를 입력하면 filter와 includes를 이용해 매치되는 검색을 반환 후 
다시 mpa을 이용해 li에 값을 넣어 화면에 보여주도록 구현하였습니다.
처음 검색어를 한글로만 구성했지만 영어로 검색했을 시 
대문자와 소문자 구분이 안 되는 문제가 발생할 수 있어 .toLowerCase()를 사용하였습니다.
