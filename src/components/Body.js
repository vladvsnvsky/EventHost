import * as React from 'react';
import ExplorePage from './ExplorePage';
import FutureMakers from './FutureMakers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About';

function Body() {
  return (
    <Router>
        <Routes>
          <Route path="*" element={<ExplorePage/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/events" element={<ExplorePage/>}/>
          <Route exact path="/events/future-makers" element={<FutureMakers/>}/>
        </Routes>
    </Router>
  )
}

export default Body