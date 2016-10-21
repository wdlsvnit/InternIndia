import React, { Component, PropTypes } from 'react';

// Components
import Company from './Company';

class CompanyList extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.fetchCompanyData();    
  }

  fetchCompanyData(){
    var url = './data.json';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({
          data: jsonData
        });
      })
      .catch( error => console.log('JSON Fetch error : ' + error) );
  }

  render() {
    var {data} = this.state;
    return (
    	<div className="companyList">
        {
          data && data.map( (company, i) => {
            return(
              <Company key={i} data={company} />
            );
          }) 
        }
    	</div>
    );
  }
}

export default CompanyList;
