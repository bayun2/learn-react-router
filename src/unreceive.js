import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Unreceive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:'12345678'
    }
  }

  render() {
    return (
      <div>
        <h1>兑换成功页面</h1>
        <p>兑换码为：{this.state.code}</p>
        <p><Link to="/pages/single/done">点击领取</Link></p>
        <p><Link to="/pages/single/unexchange">回头未兑换页</Link></p>
      </div>
    );
  }
}

Unreceive.defaultProps = {
  code:''
}

Unreceive.propTypes = {
  code: React.PropTypes.string
}

module.exports = Unreceive;
