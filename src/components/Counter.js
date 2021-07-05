import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from 'react';
import useWindowWidth from './hooks/useWindowWidth';

const Counter = () => {
  // state
  const [state, setState] = useState({ count: 0 });

  const ref = useRef();
  console.log(ref);

  // event
  const click = useCallback(() => {
    setState({ count: state.count + 1 });
  }, [state.count]);

  // useEffect
  // 첫번째 인수는 함수, 두번째 인수는 배열
  // 함수는 동작, 배열은 추가 동작
  // useEffect는 리턴이 된 직후에 실행된다. 무조건
  // 때문에 여러개 써도 상관이 없다.
  // return은 끝나면 실행이 된다.
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  // state가 바뀐 직후 실행이 된다.
  useEffect(() => {
    console.log('state가 변경된 후 실행');
    return () => {
      console.log('state가 변경되기 전 실행');
    };
  }, [state]);

  // 변경이 있을 때 마다 실행
  useEffect(() => {
    console.log('1');
    return () => {
      console.log('2');
    };
  });

  const width = useWindowWidth();

  return (
    <div>
      <h1 ref={ref}>{state.count}</h1>
      <h1>{width}</h1>
      <button onClick={click}>+</button>
    </div>
  );
};

export default Counter;
