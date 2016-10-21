import React, { Component, PropTypes } from 'react';

import Opening from './Opening';

class Openings extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<ul className="openings">
	       {
	       	this.props.data.map( (opening, i) => {
	       		return(
	       			<Opening key={i} data={opening}/>
	     			);
	       	})
	       } 
    	</ul>
    );
  }
}

export default Openings;
