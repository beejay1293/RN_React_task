import React, { Component } from 'react';
import Header from './header';
import Details from './details';




export class Dashboard extends Component {

  render() {

    return (
      <section className="main">
        <Header />
        <Details/>
      </section>
    );
  }
}


