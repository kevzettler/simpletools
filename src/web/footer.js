import React, { Component } from 'react';

import {
  Collapse,
  Row} from 'reactstrap'


class Footer extends Component {

  

  render() {
    return (
      <div className="footer">

      
  				<p>Simpletools.io {(new Date().getFullYear())} Made by <a href="https://www.kburchardt.com">Konrad Burchardt</a> </p>
  				


  			
		</div>
        
    );
  }
}

export default Footer;



