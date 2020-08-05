import React from 'react';
import withAuth from '../hocs/withAuth';
import axios from 'axios';
import Counter from '../components/Counter';
import Example9 from '../components/Example9';
import PersonContext from '../context/PersonContext';
import BookListContainer from '../containers/BookListContainer';

class Home extends React.Component {
  static contextType = PersonContext;
  state = {
    books: [],
    loading: false,
    error: null,
  };
  render() {
    return <BookListContainer token={this.props.token} />;
    /*
    return (
      <div>
        <h1>Home</h1>
        {this.state.loading && <h3>로딩 중...</h3>}
        {this.state.error && <h3>에러다!!!</h3>}
        {this.state.error === null &&
          this.state.books.map((book) => <p>{book.title}</p>)}
        <Counter />
        <Example9 />
        <p>{JSON.stringify(this.context)}</p>
      </div>
    );
    */
  }

  async componentDidMount() {
    console.log('Home componentDidMount');
    // API 를 요청해서 책 리스트를 가져온다.

    // url => 'https://api.marktube.tv/v1/book'
    // token
    // localStorage.getItem('token') => this.props.token

    // 로딩 시작
    // this.setState({
    //   loading: true,
    //   error: null,
    // });
    // try {
    //   await sleep(3000);
    //   const response = await axios.get('https://api.marktube.tv/v1/book', {
    //     headers: {
    //       Authorization: `Bearer ${this.props.token}`,
    //     },
    //   });
    //   console.log(response.data);
    //   const books = response.data;
    //   this.setState({ books, loading: false, error: null });
    // } catch (error) {
    //   this.setState({
    //     loading: false,
    //     error,
    //   });
    //   console.log(error);
    // }
  }
}

export default withAuth(Home);
