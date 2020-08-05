// 다 여기다 쓴다.

// 액션의 타입을 정의하여 변수로 빼는 단계
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

// 액션 객체를 만들어 내는 함수 (액션 생성자)를 만드는 단계
export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function endLoading() {
  return {
    type: END_LOADING,
  };
}

// books
export const START_GET_BOOKS = 'START_GET_BOOKS';
export const SUCCESS_GET_BOOKS = 'SUCCESS_GET_BOOKS';
export const FAIL_GET_BOOKS = 'FAIL_GET_BOOKS';

export function startGetBooks() {
  return {
    type: START_GET_BOOKS,
  };
}

export function successGetBooks(books) {
  return {
    type: SUCCESS_GET_BOOKS,
    books,
  };
}

export function failGetBooks(error) {
  return {
    type: FAIL_GET_BOOKS,
    error,
  };
}
