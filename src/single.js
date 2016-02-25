import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Home from './home';
import Unexchange from './unexchange';
import Unreceive from './unreceive';
import Done from './done';

class Single extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Single.defaultProps = {

}

Single.propTypes = {

}

ReactDOM.render((
  <Router history={browserHistory}>
    <Router path="/pages/single" component={Single}>
      <IndexRoute component={Home}/>
      <Route path="/pages/single/unexchange" component={Unexchange}/>
      <Route path="/pages/single/unreceive" component={Unreceive}/>
      <Route path="/pages/single/done" component={Done}/>
    </Router>
  </Router>
), document.getElementById('example'));
