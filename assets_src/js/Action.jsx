import React from 'react';
import Button from './Button.jsx';
import Tip from './Tip.jsx';

export default class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tipShown: false,
    };
  }
  costClassNames() {
      if(this.props.canAfford) {
          return 'cost-value';
      } else {
          return 'cost-value cannot-afford';
      }
  }



  render() {

    let costClass = '';

    if(this.props.canAfford) {
      costClass = 'success';
    } else {
      costClass = 'error';
    }


    return (
      <div className="action">
        { this.props.tip &&
          <Tip
            tip={this.props.tip}
            tipShown={this.state.tipShown}
            />
        }
        <Button
          onClick={this.props.onClick}
          classes={this.props.classes + ' button-with-image'}
          canAfford={this.props.canAfford}
          />
        <div className="action_details">
          { this.props.title &&
            <b className="title">{this.props.title}</b>
          }
          { this.props.cost &&
            <span className={"cost " + costClass}>
              <span className="label">Cost</span>
              <span className={this.costClassNames()}>{this.props.cost}</span>
            </span>
          }
          { this.props.upkeep &&
            <span className="upkeep">
              <span className="label">Upkeep</span>
              <span className="upkeep-value">{this.props.upkeep}</span>
            </span>
          }
          { this.props.desc &&
            <p>{this.props.desc}</p>
          }
        </div>
      </div>
    )
  }
}
