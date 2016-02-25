import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Unexchange from './unexchange';
import Unreceive from './unreceive';
import Done from './done';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0
    }
  }

  render() {
    let home;
    switch(this.state.status) {
      case 0:
        home = <Unexchange route={this.props.route}/>;
        break;
      case 1:
        home = <Unreceive route={this.props.route} />;
        break;
      case 2:
        home = <Done route={this.props.route} />;
        break;
      default:
        //fixme
        break;
    }
    return (
      <div>
        {home}
      </div>
    );
  }
}

Home.defaultProps = {

}

Home.propTypes = {

}

module.exports = Home;
