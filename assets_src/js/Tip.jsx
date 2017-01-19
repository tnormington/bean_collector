import React from 'react';

export default class Tip extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateContentClass() {
        if(this.props.tipShown) {
            return 'active tip-content';
        } else {
            return 'tip-content';
        }
    }

    calculateIconClass() {
        if(this.props.tipShown) {
            return 'tip-toggle fa fa-close';
        } else {
            return 'tip-toggle fa fa-info-circle';
        }
    }

    render() {
        return (
            <span className="tip">
                <p className={ this.calculateContentClass()}>
                    {this.props.tip}
                </p>
            </span>
        )
    }
}
