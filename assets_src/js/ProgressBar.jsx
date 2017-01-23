import React from 'react';
import ReactDOM from 'react-dom';
import Model from './Model.jsx';

export default class ProgressBar extends React.Component {
  render() {
      let percent = this.props.value / this.props.max * 100;

    return (
      <div className="progress-bar">
        <div className="progress-bar-inner" ref="progressBarInner" style={{width: percent+'%'}}></div>
      </div>
    )
  }
}
