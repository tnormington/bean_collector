import React from 'react';
import Tip from './Tip.jsx';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipShown: false,
            options: this.props.options
        };
    }

    classNames() {
        return this.props.classes + ' button';
    }

    toggleTip(e) {
        e.stopPropagation();
        this.setState((prevState) => ({
            tipShown: !prevState.tipShown
        }))
    }

    costClassNames() {
        if(this.props.canAfford) {
            return 'cost';
        } else {
            return 'cost cannot-afford';
        }
    }




    render() {
        return (
            <button
                className={this.classNames()}
                onClick={this.props.onClick}
                disabled={!this.props.canAfford}
                >
                { this.props.cost &&
                    <span className={this.costClassNames()}>{this.props.cost}</span>
                }
                {this.props.text}
                { this.props.level &&
                    <span className="level">
                        Level: {((this.props.level - 1) / 0.05).toFixed() }
                    </span>
                }
                { this.props.tip &&
                    <Tip
                        tip={this.props.tip}
                        tipShown={this.state.tipShown}
                        onClick={(e) => this.toggleTip(e)}
                    />
                }
                { this.props.icon &&
                  <i className={"fa fa-" + this.props.icon} />
                }
            </button>
        );
    }
}
