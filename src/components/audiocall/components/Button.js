import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <>
        <button className={this.props.className}
                onClick={this.props.handleEvent}>
          {this.props.label}
        </button>
      </>
    );
  }
}

Button.defaultProps = {
  className: '',
  handleEvent: '',
  label: '',
};

export default Button;
