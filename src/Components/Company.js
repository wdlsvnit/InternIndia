import React, { Component, PropTypes } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

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
      <StickyContainer className="company">
        <Sticky>
          <CompanyInfo name={name} location={location}/>
        </Sticky>
        <Openings data={this.props.data.openings}/>
      </StickyContainer>
    );
  }
}

export default Company;
