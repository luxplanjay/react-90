import { Component } from 'react';

// "12345/cat"

// "12346/cat"

// "12345/cat"  !== "12346/cat"

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // ОТРЕЗАТЬ ID ЗАПРОСА ИЗ QUERY
      // делаем http запрос с query и page
      // записываем результат в images
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>

        <div>Gallery</div>

        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
