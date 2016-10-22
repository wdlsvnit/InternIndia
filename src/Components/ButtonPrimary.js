import React, { Component, PropTypes } from 'react';

class ButtonPrimary extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link} target="_blank" className="button primary">
        {this.props.text}
      </a>
    );
  }
}

export default ButtonPrimary;
