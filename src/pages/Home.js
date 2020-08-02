import React, { Component } from 'react';
import axios from 'axios';
import PersonContext from '../Context/PersonContext';
import withAuth from '../hocs/withAuth';
import '../styles/home.scss';

class Home extends Component {
  static contextType = PersonContext;
  state = {
    books: [],
    loading: false,
    error: null,
  };
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        {this.state.loading && <h3>로딩 중</h3>}
        {this.state.error ? (
          <h2>에러</h2>
        ) : (
          <div className="books">
            {this.state.books.map((book, i) => {
              return (
                <div className="book" key={i}>
                  <h2>제목 : {book.title}</h2>
                  <p>메세지 : {book.message}</p>
                  <div>저자 : {book.author}</div>
                  <div>업로드 일 : {book.updatedAt.slice(0, 10)}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // 해당 컴포넌트가 마운트 될 때
  async componentDidMount() {
    // 로딩 시작
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      const res = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      });
      console.log(res.data);
      this.setState({
        ...this.state,
        books: [...res.data],
      });
      this.setState({
        ...this.state,
        loading: false,
      });
    } catch (err) {
      this.setState({
        ...this.state,
        error: true,
      });
    }
  }
}

export default withAuth(Home);
