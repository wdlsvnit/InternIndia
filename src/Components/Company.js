import React, { Component, PropTypes } from 'react';

class Company extends Component {
    static propTypes = {
      className: PropTypes.string,
    };

    constructor(props) {
      super(props);
    }

    render() {
      return (
				<h1>This is a company</h1>          
      );
    }
}

export default Company;
