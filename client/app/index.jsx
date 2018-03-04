import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { RecommendationList } from './recommendationList.jsx';
import { Header } from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: new Array(4).fill({title: "a", description: "a", price: "a", photo_url: "http://lorempixel.com/640/480", _id: "a"}),
    };
  }
  componentDidMount() {
    this.fetchRecommendations();
  }
  fetchRecommendations() {
    const that = this;
    $.ajax({
      type: 'GET',
      url: '/listings/2/recommendations',
      success: (data) => {
        that.setState({ recs: data[0].recommendations });
      },
      error: () => {
        console.log('error');
      },
    });
  }
  render() {
    return (
      <div className="main">
        <div>
          <Header />
        </div>
        <RecommendationList recs={this.state.recs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
