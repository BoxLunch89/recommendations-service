import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { RecommendationList } from './recommendationList.jsx';
import { Header } from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [],
    };
  }
  componentDidMount() {
    const pathName = window.location.pathname;
    const listing = Number(pathName.split('/')[2]) || 5;
    this.fetchRecommendations(listing);
  }
  fetchRecommendations(listing) {
    const that = this;
    $.ajax({
      type: 'GET',
      url: `/listings/${listing}/recommendations`,
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
