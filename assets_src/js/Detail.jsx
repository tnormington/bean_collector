import React from 'react';

export default class Detail extends React.Component {
  render() {
    return (
      <div className={"detail " + this.props.label.toLowerCase().replace(' ', '-')}>
        <span className="label">{this.props.label}</span>
        <span className="value">{this.props.value}</span>
      </div>
    )
  }
}
