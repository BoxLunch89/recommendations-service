import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [
        {title: "Milesview", description: "Architecto aut explicabo a animi temporibus cumque…iti magni quidem est in. Doloremque vitae soluta.", price: "385.00", photo_url: "http://lorempixel.com/640/480"}],
    };
  }
  componentWillMount() {
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
    return (this.state.recs[0].title);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
