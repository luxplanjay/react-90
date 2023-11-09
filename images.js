import { Component } from 'react';

// submit > query > cat > page 1
// click > query > cat > page 2
// click > query > cat > page 3

// submit > query > dog > page 1

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
      // делаем http запрос с query и page
      // записываем результат в images
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
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
