import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Siddhant Mishra's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h1><Link to="/">About this site</Link></h1>
          <p>
            This is my website. I keep updating my projects and relevant details here.
            Keep checking to know more about CFD applied to geophysical flows, Direct
            Numerical Simulation and Large Eddy Simulation etc.
          </p>
        </div>
      </header>
      <p>My interest to study physics behind fluid flow especially geophysical fluid flow
        lead me to join
        <a href="https://sites.google.com/site/itsanikesh/"> <b style={{ color: '#566573' }}>Flow Physics Lab</b>. </a>
        I work with my guide
        <a href="https://www.linkedin.com/in/anikesh-pal-84a47724/"><b style={{ color: '#566573' }}> Dr. Anikesh Pal </b></a>
        on many exciting problems. Also, we discuss trending topics such as
        ML applied to fluid flows, CUDA programming and stuff.
      </p>
    </article>
  </Main>
);

export default Index;
