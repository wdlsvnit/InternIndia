import React, { Component, PropTypes } from 'react';

// Components
import Company from './Company';

class CompanyList extends Component {
  static propTypes = {
    className: PropTypes.string,
    searchString: PropTypes.string
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

  filterToSearchString(company) {
    var {searchString} = this.props;
    if(searchString)  {
      return company.name.toLowerCase().search(searchString.toLowerCase()) > -1;
    } else {
      return true;
    }
  }

  render() {
    var {data} = this.state;
    return (
    	<ul className="companyList">
        {
          data && data.filter(this.filterToSearchString.bind(this)).map( (company, i) => {
            return(
              <Company key={i} data={company}/>
            );
          }) 
        }
    	</ul>
    );
  }
}

export default CompanyList;
