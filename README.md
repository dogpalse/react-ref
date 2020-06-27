# React ref
-----
보통의 html에서는 특정 요소에 특정 작업을 하기 위해 요소에 id라는 프로퍼티를 준다. 리액트에서는 id와 비슷한 기능을 하는 ref라는 기능이 있다.
리액트에서 id를 기능을 막지는 않지만 권하지 않는다. 같은 컴포넌트를 반복해서 사용할 경우 id 값이 중복 될 수 있는데 id 값은 유일해야 한다는 특성에 위반될 수 있다. 이러한 이유로 리액트에서는 id를 쓴느 것을 권하지 않는다.

### 1. ref를 써야하는 상황
DOM을 직접 접근해야 할 경우에 ref를 사용한다.

### 2. ref 사용
1. 콜백함수를 사용하여 ref 설정
ref를 달고자 하는 요소에 ref라는 콜백함수를 props로 전달(ref를 파라미터로 받는 콜백함수)
```javascript
<input ref={(ref) => {this.input = ref}}>
```

2. createRef를 사용해서 ref 설정
 - 컴포넌트 내부에 맴버 변수로 React.createRef()를 담는다.
 - 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어준다.
```javascript
const input = React.createRef();
const handleFocus = () => {
    this.input.current.focus();
}
reder() {
    return (
        <input ref={this.handleFocus} />
    )
}
```

### 3. 컴포넌트에서 ref 달기
컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 접근할 때 사용한다.
```javascript
<Comopnent ref={(ref) => this.component = ref}>
```
