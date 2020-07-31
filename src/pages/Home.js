import withAuth from '../hocs/withAuth';
import React, { Component } from 'react';
import axios from 'axios';
import PersonContext from '../Context/PersonContext';

class Home extends Component {
  static contextType = PersonContext;
  state = {
    books: [],
    loading: false,
    error: null,
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.loading && <h3>로딩 중</h3>}
        {this.state.error ? (
          <h3>에러</h3>
        ) : (
          this.state.books.map((book) => {
            return <p>{book.title}</p>;
          })
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

export default withAuth(Home, true);
