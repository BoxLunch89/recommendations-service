import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from './index.css';
import { RecommendationList } from './recommendationList.jsx';
import { Header } from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [
        {title: "apple", description: "Architecto aut explica", price: "385.00", photo_url: "http://lorempixel.com/640/480",  price: "385.00", photo_url: "http://lorempixel.com/640/480", _id: "5a98d10d90e89f9b927deb7b"}],
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
        console.log('Sucess!: ', (data[0].recommendations));
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
        <div className="header">
          <Header />
        </div>
          <RecommendationList />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
