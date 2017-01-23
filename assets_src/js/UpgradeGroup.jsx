import React from 'react';
import Incrementor from './Incrementor.jsx';

export default class UpgradeGroup extends React.Component {
  render() {
    const bpl = this.props.beanPlantLevel - 1
    let valueClass = '';
    if(bpl < 0) {
      valueClass = 'negative';
    } else if(bpl === 0) {
      valueClass = 'zero';
    } else {
      valueClass = 'positive';
    }

    let costClass = '';
    if(this.props.canAfford) {
      costClass = 'success';
    } else {
      costClass = 'error';
    }

    return (
      <div className="upgrade-group">
          <Incrementor
          upgrade={this.props.upgrade}
          downgrade={this.props.downgrade}
          canUpgrade={this.props.canUpgrade}
          canDowngrade={this.props.canDowngrade}
          />
          <section className="upgrade-group_details">
              <h4>{this.props.title}</h4>
              <div className="upgrade-group_details_desc">
                  {this.props.desc}
              </div>
              <div className={"upgrade-group_details_cost " + costClass}>{this.props.cost}</div>
              <div className="upgrade-group_details_level">
                  <span className="label">Level</span>
                  <span className={"value " + valueClass}>
                      {this.props.level}
                  </span>
              </div>
          </section>
      </div>
    )
  }
}
