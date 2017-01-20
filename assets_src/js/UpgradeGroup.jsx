import React from 'react';
import Incrementor from './Incrementor.jsx';

export default class UpgradeGroup extends React.Component {
  render() {
    return (
      <div className="upgrade-group">
          <Incrementor
          upgrade={this.props.upgrade}
          downgrade={this.props.downgrade}
          canUpgrade={this.props.canUpgrade}
          canDowngrade={this.props.canDowngrade}
          />
          <section className="upgrade-group_details">
              <div className="upgrade-group_details_desc">
                  {this.props.desc}
              </div>
              <div className="upgrade-group_details_cost">{this.props.cost}</div>
              <div className="upgrade-group_details_level">
                  Level
                  <span className="value">
                      {this.props.level}
                  </span>
              </div>
          </section>
      </div>
    )
  }
}
