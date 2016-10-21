import React, { Component, PropTypes } from 'react';

class CompanyInfo extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="companyInfo">
        <span className="companyName">{this.props.name}</span>
        <span className="companyLocation">{this.props.location.city}, {this.props.location.country}</span>
      </div>
    );
  }
}

export default CompanyInfo;
