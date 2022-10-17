import React from 'react';
import Navbar from "./Navbar";

export default class Add extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <>
     
        <div className='ad'>
        <h2>hyy</h2>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-1872245526491140'
          data-ad-slot='2698350024'
          data-ad-format='auto'
          google_adtest = "on"
         
           />
      </div>
      </>
    
    );
  }
}
