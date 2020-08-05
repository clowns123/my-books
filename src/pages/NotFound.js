import React, { useContext, useCallback } from 'react';
import { startLoading } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export default function NotFound() {
  // const store = useContext(MyReducxContext);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const click = useCallback(() => {
    dispatch(startLoading());
  }, [dispatch]);

  return (
    <div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>{JSON.stringify(loading)}</p>
      <button onClick={click}>변환</button>
    </div>
  );
}

// 컨테이너 vs (프레젠테이셔널) 컴포넌트
// 컨테이너는 로직만 담겨 있다. => 로직을 처리해서 컴포넌트에 props로 보내줌
// 컴포넌트는 뷰만 담겨있다.  => 테스트가 쉽다. => props로 받아서 보여주는 로직에 집중
