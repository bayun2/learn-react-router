import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Modal from 'react-modal';

class Unexchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname:'Tom',
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
  }

  routerWillLeave() {
    this.setState({uname:'Tom2'});
    this.closeModal();
    return false;
  }

  render() {
    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <div>
        <span>用户id:{this.state.uname}</span>
        <ol>
          <li>礼物1</li>
          <li>礼物2</li>
          <li>礼物3</li>
        </ol>
        <p><a onClick={this.openModal}>点击兑换</a></p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequesetClose={this.closeModal}
          style={customStyles}>
            <p>呀！宝宝，余额不足啦，赶紧去汇市交易赚钱吧！</p>
            <button onClick={this.closeModal}>close</button>
            <p><Link to="/pages/single/unreceive">点击兑换</Link></p>
        </Modal>
      </div>
    );
  }
}

Unexchange.defaultProps = {

}

Unexchange.contextTypes = {
    router: React.PropTypes.object.isRequired
}

Unexchange.propTypes = {

}

module.exports = Unexchange;
