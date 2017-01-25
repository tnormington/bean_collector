import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalOpen: false
  //   };
  // }
  closeModal() {
    const $this = $(ReactDOM.findDOMNode(this.refs.modal));
    $this.fadeOut('fast');
  }
  render() {
    return (
      <div className={'modal ' + this.props.classes} ref="modal">
        <span className="modal_close" onClick={() => { this.closeModal() }}><i className="fa fa-close fa-fw"></i></span>
        {this.props.children}
      </div>
    )
  }
}
