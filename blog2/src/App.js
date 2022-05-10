import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [a,b] = useState(['남자 코트 추천', '강남하고 싶다', '도도도젝트 끝내고 싶다']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);

  function 함수(){
    console.log(1)
  }
  function 따변(){
    따봉변경(따봉+1)
  }
  function 추우천(){
    let copy = [...a];
    copy[0] = '남자남자여자 코트 추천';
    b(copy);
  }
  
  
  
  
  function 가나다(){
    let copy = [...a];
      copy.sort();
      b(copy)
  }
  
  // let [a, b] = useState('남자 코트 추천');
  // let [c, d] = useState('취업하고 싶다');
  // let [e, f] = useState('프로젝트 끝내고 싶다');
  return (
    <div className="App">
      <div className="black-nav">
        <div>{logo}</div>
      </div>
      <div className="list">
        <h4>{a[0]} <span onClick={따변}>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      <Button></Button>
      <button onClick={추우천}>추천</button>
      <button onClick={가나다}>정렬버튼</button>
    </div>
  )
}

function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

function Button(){
  return(
    <div>
    <button>뭘봐</button>
    <button>취업하자</button>
    </div>
  )
}
export default App;