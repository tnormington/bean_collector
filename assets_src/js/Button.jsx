import React from 'react';
import Tip from './Tip.jsx';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    classNames() {
        return this.props.classes + ' button';
    }

    // costClassNames() {
    //     if(this.props.canAfford) {
    //         return 'cost';
    //     } else {
    //         return 'cost cannot-afford';
    //     }
    // }



    render() {
        return (
            <button
                className={this.classNames()}
                onClick={this.props.onClick}
                disabled={!this.props.canAfford}
                >
                {this.props.text}
                { this.props.icon &&
                  <i className={"fa fa-fw fa-" + this.props.icon} />
                }
            </button>
        );
    }
}
