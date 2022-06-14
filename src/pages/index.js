import React from "react"

import { About, Hero, LeftSideBar } from '../components';

const Index = () => {
  return (
    <div id="root">
      <Hero />
      <About />
      <LeftSideBar />
    </div>
  )
};

export default Index;