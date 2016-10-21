import React, { Component, PropTypes } from 'react';

import Openings from './Openings';
import CompanyInfo from './CompanyInfo';

class Company extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    var {name, location} = this.props.data;
    return (
      <div className="company">
        <CompanyInfo name={name} location={location}/>
        <Openings data={this.props.data.openings}/>
      </div>
    );
  }
}

export default Company;
