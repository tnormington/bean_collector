import React from 'react';
import Tip from './Tip.jsx';
import SubButton from './SubButton.jsx';

export default class TriButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipShown: false,
            options: this.props.options,
            currentOption: this.props.options[0].type,
            optionsDom: null,
        };
    }

    classNames() {
        return this.props.classes + ' button tri-button';
    }

    toggleTip(e) {
        e.stopPropagation();
        this.setState((prevState) => ({
            tipShown: !prevState.tipShown
        }))
    }

    costClassNames() {
        if (this.props.canAfford) {
            return 'cost';
        } else {
            return 'cost cannot-afford';
        }
    }

    setCurrentOption(option) {
        this.setState(() => {
            currentOption: option
        });
    }

    render() {
        return (
            <button className={this.classNames()} onClick={this.props.onClick} disabled={!this.props.canAfford}>
                {this.props.cost && <span className={this.costClassNames()}>{this.props.cost}</span>
}
                {this.props.text}
                {this.props.level && <span className="level">
                    Level: {((this.props.level - 1) / 0.05).toFixed()}
                </span>
}
                {this.state.options && <div className="options">
                </div>
}
                {this.props.tip && <Tip tip={this.props.tip} tipShown={this.state.tipShown} onClick={(e) => this.toggleTip(e)}/>
}
            </button>
        );
    }
}
