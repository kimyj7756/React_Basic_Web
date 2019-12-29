import React from 'react';
import logo from './logo.svg';
import './App.css';

// 컴포넌트(첫 번째 실습)
const myStyle = {
  color: 'blue',
  fontWeight: 700,
}
// JSX -> html 태그
// JSX -> style을 통해 css (jsx)
// JSX -> className을 통해 css (css -> App.css)
function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>HelloWorld</h1>
      <h1 style={myStyle}>HelloWorld</h1>
      <h1 className={'myStyle2'}>HelloWorld</h1>
      <div className={'post'}>
        첫 게시글입니다.
      </div>
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}
// fuction 컴포넌트(두 번째 실습)
// props 값을 뿌려주는 것
function WorldClock(props){
  return(
    <div className={"WorldClock"}>
      <h2> 도시: {props.city}</h2>
      <p> 시간: {props.time}</p>
    </div>
  )
}
function App2() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시그니', 12],
    ['LA', 17]
  ]
  // index값 1부터 자동 삽입
  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time = {citytime[1]} key={index}/>
  )
  return (
    <div className="App2">
      <div className={'post'}>
        두 번째 게시글입니다.
      {WorldClockList}
      </div>
    </div>
  );
}
// 클래스 컴포넌트(세 번째 실습) -> state는 상태를 저장
// 요구사항 1.시간과 분이 변화하는 것을 보고 싶다.
// 요구사항 2. 동적으로 보고 싶다.
class WorldClock_c extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0
    }

    setInterval(() => {
      // setState는 state를 저장하는 함수
      // state는 이전의 state
      this.setState((state)=>(
        // if 조건문(event)
        state.minute === 59
        // 위에가 맞으면 ? 실행
        ?{hour: state.hour + 1, minute: 0}
        // 위에가 안 맞으면 : 실행
        :{minute: state.minute+1}
      ))
     }, 100)
  }
  // render 미리 약속된 함수
  render(){
    return(
      <div className={"WorldClock_c"}>
        <h2> 도시: {this.props.city}</h2>
        <p> 시간: {this.state.hour}시 {this.state.minute}분 </p>
      </div>
    )
  }
}
function App3() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시그니', 12],
    ['LA', 17]
  ]
  // index값 1부터 자동 삽입
  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock_c city={citytime[0]} time = {citytime[1]} key={index}/>
  )
  return (
    <div className="App3">
      <div className={'post'}>
        세 번째 게시글입니다.
      {WorldClockList}
      </div>
    </div>
  );
}

// Event 컴포넌트(네 번째 실습)
class WorldClock_e extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        // 위에가 맞으면 ? 실행
        ?{hour: state.hour + 1, minute: 0}
        // 위에가 안 맞으면 : 실행
        :{minute: state.minute+1}
      ))
     }, 100)
  }
  // =()은 에러 function이다(편함).
  handlingClick = (event) =>{
    // F12에서 콘솔에 표시가 됨
    console.log(event.target)
    // 이벤트 가져오기
    this.setState({stop: event.target.value})
    // 타이머를 멈춰주는 것
    clearInterval(this.timer)
  }
  // render 미리 약속된 함수
  render(){
    return(
      <div className={"WorldClock_c"}>
        <h2> 도시: {this.props.city}</h2>
        <p> 시간: {this.state.hour}시 {this.state.minute}분 </p>
        <button value={true} onClick={this.handlingClick}>STOP</button>
      </div>
    )
  }
}
class App4 extends React.Component {

  constructor(props){
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시그니', 12],
      ['LA', 17],
      ['부산', 15]
    ]
    // F12에서 react 페이지에서 textarea에서 작성한 것을 확인 할 수 있다.
    this.state ={
      content: ''
    }
  }
  // =()은 에러를 설정 해주는 것
  handlingChange = (event) =>{
    this.setState({content: event.target.value})
  }
  
  // index값 1부터 자동 삽입
  render(){
    return(
      <div className="App4">
        <div className={'post'}>
          세 번째 게시글입니다.
          <textarea value={this.state.content} onChange={this.handlingChange}>
          </textarea>

          {this.cityTimeData.map((citytime, index)=>
            <WorldClock_e city={citytime[0]} time = {citytime[1]} key={index}/>
          )
          }
        </div>
      </div>
    );
  }
}

// LifeCycle(다섯 번째 실습)
// PureComponent는 자동으로 전체 해주는 컴포넌트
class WorldClock_l extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
     console.log("  Child) 시작합니다.")
  }
  
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        // 위에가 맞으면 ? 실행
        ?{hour: state.hour + 1, minute: 0}
        // 위에가 안 맞으면 : 실행
        :{minute: state.minute+1}
      ))
     }, 5000)
    console.log("  Child) 마운트되었습니다.")
  }
  componentDidUpdate(){
    console.log("  Child) 업데이트!")
  }
  componentWillUnmount(){
    console.log("  Child) 언마운트!")
    clearInterval(this.timer)
  }
  // =()은 에러 function이다(편함).
  handlingClick = (event) =>{
    // F12에서 콘솔에 표시가 됨
    console.log(event.target)
    // 이벤트 가져오기
    this.setState({stop: event.target.value})
    // 타이머를 멈춰주는 것
    clearInterval(this.timer)
  }
  // render 미리 약속된 함수
  render(){
    return(
      <div className={"WorldClock_c"}>
        <h2> 도시: {this.props.city}</h2>
        <p> 시간: {this.state.hour}시 {this.state.minute}분 </p>
        <button value={true} onClick={this.handlingClick}>STOP</button>
      </div>
    )
  }
}
class App5 extends React.Component {

  constructor(props){
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시그니', 12],
      ['LA', 17],
      ['부산', 15]
    ]
    // F12에서 react 페이지에서 textarea에서 작성한 것을 확인 할 수 있다.
    this.state ={
      content: '',
      show: true,
    }
    console.log("Parent) 시작합니다.")
  }

  // Child가 마운트 되어야지 부모도 그때 마운트 된다.
  componentDidMount(){
    console.log("Parent) 마운트되었습니다.")
  }
  componentDidUpdate(){
    console.log("Parent) 업데이트!")
  }

  // =()은 에러를 설정 해주는 것
  handlingChange = (event) =>{
    this.setState({content: event.target.value})
  }
  // 눌렀을 때 show의 bool값을 반대로 해주는 함수
  handlingClick = (event)=>{
    this.setState((prevState)=>({show: !prevState.show}))
  }
  // index값 1부터 자동 삽입
  render(){
    console.log("Parent) 렌더링!")
    return(
      <div className="App5">
        <div className={'post'}>
          세 번째 게시글입니다.
          <textarea value={this.state.content} onChange={this.handlingChange}>
          </textarea>
          <br></br>
          <br></br>
          <button onClick={this.handlingClick}>손가락 튕기기</button>
          
          {this.state.show &&
            this.cityTimeData.map((citytime, index)=>
            <WorldClock_l city={citytime[0]} time = {citytime[1]} key={index}/>
          )
          }
        </div>
      </div>
    );
  }
}

// 컴포넌트 수출
// default : 이 파일은 default(기본적으로, 하나만 export하겠다.)
export default App5;