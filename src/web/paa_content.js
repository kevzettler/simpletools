import React, { Component } from 'react';
import {
  Collapse,
  Row,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import pipeline from '../images/pipeline.png'
import '../css/content.css'



class Content extends Component {

  

  render() {
    return (
    <Container>
    
    <h3 className="h3content">People Also Ask + Machine Learning</h3>

    <p className="contentp">  This SEO machine learning tool extracts Google's People Also Ask box questions and uses Google Natural language processing API to inspect the question and identify the prevailing emotional opinion that the question has. The question can have a positive, negative or neutral sentiment.</p>
     <p className="contentp"> Search for a specific topic, brand, product, or service, identify the sentiment your customers have and export to CSV to share with your content team.</p>

     <Row>
     
     <img src={pipeline} alt="Pipeline" className="image_home"/>
    </Row>



<h4> Frequently Asked Questions </h4>

  <h5><b>What is this tool for? </b></h5>
  <p> This tool can be used to get content ideas or to identify the sentiment of the questions your customers are asking.</p>

  <h5><b>How to use the Tool? </b></h5>
  <p> Simply add a keyword and wait for the results. It usually takes like 30 seconds to get you result back.</p>

  <h5><b>What is Google’s People Also Ask?</b></h5>
<p>People Also Ask boxes are a dynamic SERP feature, containing sets of questions related to the original search query. </p>

  <h5><b>What is sentiment analysis?</b> </h5>
  <p> Sentiment analysis is the interpretation and classification of emotions (positive, negative and neutral) within text data using text analysis techniques. 
      Sentiment analysis tools allow businesses to identify customer sentiment toward products, brands or services in online feedback. For more information <a href="https://cloud.google.com/natural-language/docs/analyzing-sentiment">Click here. </a></p>


 <h5><b>Interpreting sentiment analysis values?</b> </h5>
  <p>Sentiment analysis attempts to determine the overall attitude (positive or negative) expressed within the text. </p>
  <ul>
  <li> <mark>score</mark>  of the sentiment ranges between <mark>-1.0</mark> (negative) and <mark>1.0</mark> (positive) and corresponds to the overall emotional leaning of the text.</li>
  <li> <mark>magnitude</mark> indicates the overall strength of emotion (both positive and negative) within the given text, between <mark>0.0</mark> and <mark>+inf</mark>. Unlike score, magnitude is not normalized; each expression of emotion within the text (both positive and negative) contributes to the text's magnitude (so longer text blocks may have greater magnitudes).</li>
  </ul>

<p>
  A question with a neutral score (around  <mark>0.0 </mark>) may indicate a low-emotion question, or may indicate mixed emotions, with both high positive and negative values which cancel each out. Generally, you can use magnitude values to disambiguate these cases, as truly neutral questions will have a low magnitude value, while mixed documents will have higher magnitude values.
</p>

<p>Find the official documentation <a href="https://cloud.google.com/natural-language/docs">here</a>.</p>

<h5><b>How is the tool made?</b> </h5>
<p> The tool is built using different technologies. Front end was built using <a href="">ReactJS </a>. The backend was built with <a href="">Python</a> (Flask). <a href="">People Also ask for scraper</a> was built using the Python library Selenium and Pandas. <a href="">For sentiment analysis,</a> I use the Python Library google.cloud. </p>



<h5><b>Can I get more questions?</b> </h5>
<p> Yes. You can get 100+ questions. Contact me for more information.</p>
<p>If you want to get more than 25 you can contact me <a href="mailto:hello@kburchardt.com"> here </a>.</p>


<h5> <b>How to support?</b> </h5>

<p>There are multiple ways you can help:

<ul>
<li> Share new ideas </li>
<li> Share the site </li>
<li> Contribute so that I can keep building tools!. You can <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=sundios%40gmail.com&currency_code=USD&source=url">donate here </a>. </li>

</ul>

 </p>
    
<Row>

</Row>

  	</Container>

  		
        
    );
  }
}

export default Content;