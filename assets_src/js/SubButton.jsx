import React from 'react';

export default class SubButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    classNames() {
        let classes = 'sub-button';
        if(this.props.classes) {

        }
        return classes;
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
            <span
                className={this.classNames()}
                onClick={this.props.onClick}
                disabled={!this.props.canAfford}
                >
                {this.props.text}
            </span>
        );
    }
}
