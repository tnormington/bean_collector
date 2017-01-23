import React from 'react';
import Button from './Button.jsx';

export default class Incrementor extends React.Component {

  render() {
    return (
      <div className="incrementor">
        <Button
        icon="plus"
        classes="button-icon-only plus"
        canAfford={this.props.canUpgrade}
        onClick={this.props.upgrade}
        />
        <Button
        icon="minus"
        classes="button-icon-only minus"
        canAfford={this.props.canDowngrade}
        onClick={this.props.downgrade}
        />
      </div>
    )
  }
}
