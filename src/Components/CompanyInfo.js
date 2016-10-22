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
        <h1 className="companyName">{this.props.name}</h1>
        <p className="companyLocation">{this.props.location.city}, {this.props.location.country}</p>
      </div>
    );
  }
}

export default CompanyInfo;
