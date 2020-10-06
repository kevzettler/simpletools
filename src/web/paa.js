import React, { Component , createRef } from 'react';
import {Helmet} from "react-helmet";
import '../css/home.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

//search input styling
import '../css/search.scss';

//search button styling
import '../css/search.css'

//Table results styling
import '../css/table.css'


//white Arrow
import whitearrow from '../images/white_arrow.png'


//Useless button
import { AwesomeButtonProgress,AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//Bootstrap
import {
  Container,
  Table,
  Row
} from 'reactstrap';

//Tooltip
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-tooltip/paper-tooltip.js';

import Loading from './loader'
import Loading2 from './loader2'


// top legend with scores color range 
import Legend from './legend'

//This is to Export Data into CSV
import { CSVLink, CSVDownload } from "react-csv";

//Home content
import Content from './paa_content'




class Home extends Component {

//This scrolls into table
scrollDiv = createRef();

scrollSmoothHandler = () => {
this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
};

// This is to make the table appear when clicking
// Setting state false so that it doesnt appear.
//setting empty data that will hold api results

constructor() {
  super();
    this.state = {
    showMessage:false,
    loading:false
  }


  }


  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  

//this gets triggered on line 85
  search = e => {
    this.setState({loading:true})
    e.preventDefault();

    //Here we send the input that we add on line 90 value to Flask
    axios.post("/results",{search_question: document.getElementById("buscar").value})

    //Then we call it back
    .then((res) => {

      console.log(res.data)
      //We create data variable with our returned data
      const data = res.data
      //Empty variable to pass all values from data
      const question = []
      // for loop that goes into data and pused everything to questions variable.
      for(var i in data)
        {question.push(data[i])}
      //console log to make sure our API returned the correct data and we saved in question
      console.log(question)
      //creating the state of paa and selecting the second index in question
      this.setState({paas:question[1],loading:false})
      
    })
  

// General scroll to element function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
   

    }

//class to 
  resolveClass = (value) => {
    let className = ''

    switch (true) {
        case (value < 1 && value > 0.25):
            className = 'greenclass'
            break;
        case (value < 0.25 && value > -0.25):
            className = 'yellowclass'
            break;
        case (value < -0.25):
            className = 'redclass'
            break;
        default:
            break
    }

    return className
}


  render() {


    //empty variable and set is a state
    const{paas = [] } = this.state
    const {loading} = this.state


    return (
  <div className="demo">
      <Helmet>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js" type="text/javascript" />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js" type="text/javascript" />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js" type="text/javascript" />
      </Helmet>
    <div className="content">
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
        <h1 className="main-title"><span className="thin">Explore</span> what the world is asking</h1>
          <div className="Search"> 
            <form onSubmit={this.search}  method="post">
                  <p>
                  <div className="searchbar">
                  <p> Type a keyword below and find what people are asking </p>
                    <div className="form__group field">
                       <div className="searchbox">
                          <input type="input" class="form__field" placeholder="Search" id='buscar' required />
                           <label for="name" class="form__label">E.g Netflix Stock</label>
                    </div>
                        <div className="button">

                           <AwesomeButton
                           //useless button that waits 15 seconds
                              type="primary"
                              size="medium"
                              action={this._showMessage.bind(null, true)}> Search 
                            </AwesomeButton>
                        </div>
                    </div>
                  </div>
                 </p>
              </form>
          </div>
          {this.state.showMessage && (
            <div class="arrowdiv">
            <div class="arrow bounce">
            <h4>Click here  or Scroll down to see results! </h4> 
               <a onClick={this.scrollSmoothHandler}> <img src= {whitearrow} width="35%"/> </a>
            </div>
            </div>
            )}
      </div>
    </div>

<div class = "top-loader">
{loading ? <Loading2 /> : <h1> Results </h1> }
</div>


{this.state.showMessage &&(
   <Container>
     <Legend />
<div ref={this.scrollDiv}></div>
  
     <Table>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Sentiment</th>
                        <th>Magnitude</th> 
                        <paper-tooltip>Score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive).</paper-tooltip>
                      </tr>
                    </thead>
                    <tbody>
                {paas.length ? paas.map(paa => (
                    <tr>
                      <td key="Questions">{paa.Questions}</td> 
                      <td key="Sentiment" className={this.resolveClass(paa.Sentiment)}>{paa.Sentiment}<paper-tooltip>Score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive).</paper-tooltip></td>
                      <td key="Magnitude"className="blueclass"> {paa.Magnitude}<paper-tooltip>Magnitude is the strength of sentiment regardless of score, ranges from 0 to infinity.</paper-tooltip></td>
                    </tr>
                   
                  ))
                :
                (<tr><td><Loading /> </td>
                 <td><Loading /> </td>
                 <td><Loading /> </td> </tr>)
                      }
                       </tbody>
                 </Table>
                 <a href="mailto:hello@kburchardt.com"><p> Need more Questions? Click here</p></a>
                 <CSVLink data={paas}>
                 <AwesomeButton
                  size="large"
                  type="secondary">
                  Download Data
                </AwesomeButton>
                 </CSVLink>
                  </Container>) 
}

<Content/>
  
  </div>
    
        
    );
  }
}

export default Home;



 







