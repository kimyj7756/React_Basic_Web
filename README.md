# React 학습 프로젝트
##  React 기본 기능 학습

__김연준(단독)__

### 0. 개요
------------------------------
1. 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리 React를 학습
<p align="center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABWCAMAAAD19fRaAAAAS1BMVEX///8A1v8A1P8A1v2W6fzu+/6h6/7K8/zc9/6y7v7G8v7y/P4A2P34/f544/yr7Pxe4P1L3v7m+f422/6L5/7T9f698P1t4v2B5P6m9or+AAAEG0lEQVRoge1YXbejKBC0aVREDN+a//9LtwHR5J49MxP33nEfqIcIJiEFXV3dpusaGhoaGhoaGhoaGhoaGhr+OlaLNvTH1AUPfrqRz46JoVGMPZYyfTKmNsWGe0kRwNOL2BiMdI3AjKOrx/43X/tpSLbma0TGO13YpbvyTlIEDmIfWbDg5zIWGG5jVBBgrkOPqg579biHzoEAu+C7CRCq3Gfc7iK0I4ArA0EJYKus3O3npSHm6wIU0MXvLAXcbRSCJQ9degNBrpKjdSmu45d81Lbg+ffSFDZtPCICSwAaeTM84N2/uFKYAMp8sHSvr26jnywiGb5Bv8oYo5TkFmT/iHZ6ZcaRLzNhVer556sLuJY9LiBTFuXSbczVe2i6JaL3DIM7Pslx11vE01d+zwsvZY9GZuTiyOclO22Uk+AmNi7SMDzEf/DqPJTYxGkaD4ZC6lUcK4hVS9rSIla1ObF0H+LJfE5FrzoFaTljTczzxfq0WrSs7vfkZXDNbwEo5ksJc4akAGgKzZ5mQIdNUVSkSnDdZxhq8GnAdBJD0jWVxxW2WoWe9RxPXirVrRHV2vdELhGbvRqEiwZzSvQKHmnGhllzZfXw52Ev20K7jxbI9cfmhEs36SzqJg26d15PRe3HolROisXmqy4htCjyqy67na/pS+x9RPotSEuxYgQUQHmmUfUxrgwnBCIfU8Uqv01tkT5XDDimU7fnnSu8HBxS95lHpoVqSaWpthXUbcSdlwJSlPImnYkBt2Q4n2MnN7NNhdeAL0wv5eO2J1Y3gkpx01lfPDmFgr2PjnX3XIUYhVLljL3yO1R6/wH+Eazd1JgO7cVKL/Fyag/CBgLStjnxCmXuCx2iugut6It2sPPSFWvKE5OzV30Pr85ZZmOS/daFLCMXE4sID/Iw0S2S3q/633W/Fbd/gHhZZ1Ni/8yYPPGl4F/0VVqJWa1TPM+OMLf2Dh6Df7HVymvJsu/Wt+7MqMI+62uGc6XLvLqeIwBuwzhQFqRgLORmQfKNlOaHlwJZfWIqG7C7AGVSAq96SHEkdjkVZkuHKNT17lISBWoliIenPsb71FgAeljfPnX4l80S7D0YLbXJuuw98n6WxmdelKye65DFO6PiVzujnrw+rppEn1iRP4WJSl380n8dvChbUiSXkHzDl4NyJo1HXnh1AxUf9Hmsac8XG8x1ZyBZOnPOyk+JZBi/hhNnnHvR//tbs/iwDB3gteYEqoUr29u+/j8o43twPqcZFvKzd8LiP+lLfwLncxplmarn/3/gVbkIEmn9H+f+50e9/yPRDQzORvD+57S+UBGWpSZiY9nQKQnEr7/28zDAx8kyVoxhAmankcPd8koSp3acPQ/FB/J75q/azncirvFtLr7MGxoaGhoaGhoaGhoaGhruwz9Bbyxy/tZzZAAAAABJRU5ErkJggg=="></p>

### 1. 제작 목적
------------------------------
기본기능을 통한 실력 향상

### 2. 역할 분담
------------------------------
 * 김연준: 백엔드, 프론트엔드, DB

### 3. 참고
------------------------------
 * https://ko.reactjs.org/                               -> 공식 페이지
 
### 4. Detail
------------------------------
* Framework: React
 * Tool: Visual Code
 * 언어: Javascript

### 5. 학습 노트
------------------------------
* 프로젝트 생성: npx create-react-app 프로젝트명
* 프로젝트 시작: npm start

 * [1주차] - 컴포넌트
App.js -> index.js(뿌려주는 것) -> index.html

 * [2주차] - 클래스 컴포넌트
1. State를 만든다
2. Handling 함수를 만든다
3. 이벤트가 발생하는 html태그에서 onEvent명을 통해 handling 함수를 호출한다.

* [3주차] - LifeCycle
1. Constructor
2. ComponentDidMount(필요한 데이터 요청, 각종 비동기 요청)
3. ComponentDidUpdate( 업데이트 이후 수정할 때, if(){setState()}->조건을 걸어줘야 항상 setState가 일어나지 않게 설정 )
4. ComponentWillUnmount(데이터 요청, 비동기 함수, 타이머 종료, setState X)

* [4주차] - hook
1. Import React, {userState} from 'react';
2. Const[상태명, set상태명] = useState(초기값)
3. set상태명을 setState처럼 사용

* divjoy.com 
-> 리액트로 만든 웹 사이트 만들어줌(리액트 감을 잡아줌)


------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
