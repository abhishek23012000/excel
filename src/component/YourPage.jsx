import React, { Component } from 'react';
import GoogleAd from './Add';

class YourPage extends Component {
  render() {
    return (
      <div>
      	<GoogleAd slot="2698350024" classNames="page-top" />
      	<div>Page Content...</div>
        {/* <GoogleAd slot="394738798" timeout={1000} classNames="page-bottom" />
      	<div>Page Content...</div> */}
      </div>
    );
  }
}

export default YourPage;