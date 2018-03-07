import React from 'react';
import $ from 'jquery';
import { RecommendationList } from './recommendationList';
import { Header } from './header';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [],
    };
  }
  componentDidMount() {
    const listing = this.props.id;
    this.fetchRecommendations(listing);
  }
  fetchRecommendations(listing) {
    const that = this;
    $.ajax({
      type: 'GET',
      url: `http://localhost:3005/listings/${listing}/recommendations`,
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

window.Recommendations = Recommendations;

