import React, { Component, PropTypes } from 'react';

class OpeningInfo extends Component {
  static propTypes = {
    className: PropTypes.string,
    info: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="openingInfo">
        {this.props.info}
      </div>
    );
  }
}

export default OpeningInfo;
