import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>领取成功页面</h1>
        <p>亲，这个月福利已经领啦，下个月再来兑换好东西吧！</p>
      </div>
    );
  }
}

Done.defaultProps = {

}

Done.propTypes = {

}

module.exports = Done;
