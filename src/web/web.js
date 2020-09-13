import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MetaTags from 'react-meta-tags';
import Nav from '../web/nav'

import Footer from './footer'







class App extends Component {


  

  render() {
    return (
      <div>
      <MetaTags>
      
            <title>Simpletools.io - People Also Ask and Machine Learning for New Content Ideas</title>
            <meta name="description" content="Discover new content ideas and sentiment analysis of the questions your users are asking around a topic, Brand or category." />
            <link rel="canonical" href="https://www.simpletools.io/" />

            {/* <!-- OpenGraph --> */}
            <html prefix="og: http://ogp.me/ns#"/>
            <meta property="og:title" content="Simpletools.io - People Also Ask and Machine Learning for New Content Ideas" />
            <meta property="og:description" content="Discover new content ideas and sentiment analysis of the questions your users are asking around a topic, Brand or category." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.simpletools.io/" />
            <meta property="og:site_name" content="Simpletools.io" />

      </MetaTags>

<Nav/>

<Footer />

    </div>
        
    );
  }
}

export default App;
