import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.jsx';

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false
    };
  }
  toggleList() {
    const $list = $(ReactDOM.findDOMNode(this)).find('.list');
    // const $this = $(this);
    // if($this.children().length > 0) {
    //   const $child = $this.find('> *');
    //
    // }
  }
  renderListItems: function() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(<div onClick={this.select.bind(null, item)}>
        <span style={{ color: item.hex }}>{item.name}</span>
      </div>);
    }
    return items;
  }
  render() {
    return (
      <div className="dropdown-list">
        <Button
          classes="dropdown-toggle button-icon-only"
          icon="ellipsis-v"
          onClick= {() => {
            this.toggleList()
          }}
        />
      { this.state.listOpen &&
        <ul className="list">
        </ul>
      }

      </div>
    )
  }
}
