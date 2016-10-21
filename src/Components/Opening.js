import React, { Component, PropTypes } from 'react';

class Opening extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="opening">{this.props.data.role}</li>
    );
  }
}

export default Opening;
