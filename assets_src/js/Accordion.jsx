import React from 'react';
import ReactDOM from 'react-dom';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: this.props.open
    }
  }

  toggleAccordion() {
    const $accordionContent = $(ReactDOM.findDOMNode(this.refs.accordionContent));
    $accordionContent.slideToggle('fast');
    this.setState((prevState) => ({
      accordionOpen: !prevState.accordionOpen
    }))
  }

  render() {

    let accordionClass = '';
    if(this.state.accordionOpen) {
      accordionClass = 'open';
    } else {
      accordionClass = 'closed';
    }

    return (
      <div className={'accordion ' + accordionClass}>
        <div
          className="accordion_header"
          onClick={() => {
            this.toggleAccordion()
          }}>
          <h2>{this.props.headerText}</h2>
          <span className="accordion_header_indicator">
            <i className="fa fa-caret-down"></i>
          </span>
        </div>
        <div className="accordion_content" ref="accordionContent">
          { this.props.hint &&
            <span className="hint">
              {this.props.hint}
            </span>
          }
          {this.props.children}
        </div>
      </div>
    )
  }
}
