
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

 export default class loader extends React.Component {
  //other logic
    render() {
     return(
      <div className="col spinner_item" title="MutatingDots">
              <Loader
                type="BallTriangle"
                color="#1e88e5"
                height={80}
                width={80}
              />
            </div>
      
     );
    }
 }