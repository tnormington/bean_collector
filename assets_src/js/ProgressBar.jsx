import React from 'react';
import ReactDOM from 'react-dom';
import Model from './Model.jsx';

export default class ProgressBar extends React.Component {
  render() {
      let percent = this.props.value / this.props.max * 100;

    return (
      <div className="progress-bar-group">
        <span className="label">{this.props.label}</span>
        <div className={"progress-bar " + this.props.classes}>
          <div className={"progress-bar-inner"} ref="progressBarInner" style={{width: percent+'%'}}>
            <span className="progress-bar-tag">{this.props.tag}</span>
          </div>
        </div>
      </div>
    )
  }
}
