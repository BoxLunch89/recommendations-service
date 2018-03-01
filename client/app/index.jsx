import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: ['test, test2, test3'],
    };
  }
  componentWillMount() {
    this.fetchRecommendations();
  }
  fetchRecommendations() {
    const that = this;
    console.log('check')
    $.ajax({
      type: 'GET',
      url: '/listings/5/recommendations',
      success: (data) => {
        console.log('Sucess!: ', data);
        that.setState({ recommendations: data });
      },
      error: () => {
        console.log('error');
      },
    });
  }
  render() {
    return (this.state.recommendations);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
