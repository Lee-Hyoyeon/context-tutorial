#### context api

```
일반적으로 부모와 자식간에 props를 날려 state를 변화시키는것과 달리
contextApi는 컴포넌트를 건너띄고 다른 컴포넌트에서 state, function을 사용할수있다.
언제 사용하지?
  컴포넌트안에서 전역적으로 데이터를 공유하도록 나온 개념.
- createContext
    context 객체를 만든다. 컴포넌트가 이 context를 가지려면 해당 컴포넌트 상위에 provider로
    context 정의한 변수를 감싸면 된다.

const MyStore = React.createContext(defaultValue);
    defaultValue param은 트리 안에 적절한 provider를 찾지 못했을 때 쓰이는 값입니다.

- provider
    정의한 context를 하위 컴포넌트에게 전달하는 역할.
    provider를 전달하는 변수는 꼭 value를 사용해야 합니다


```
