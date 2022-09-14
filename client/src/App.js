import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FooterContainer } from './containers/footer';
import {
  useDynamicContext,
  DynamicAuthFlow,
  DynamicContextProvider,
} from '@dynamic-labs/sdk-react';
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import Divisions from './pages/Divisions';
import Engineering from './pages/Engineering';
import Finance from './pages/Finance';
import RandW from './pages/RandW';
import Incubator from './pages/Incubator';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Community from './pages/Community';
import Internships from './pages/Internships';
import Navigation from './component/navigation/Navigation';
import SignUp from './pages/SignUp';
import './App.css'
import './App.css';
import './index.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <DynamicContextProvider
          settings={{
            appLogoUrl:
              'https://upload.wikimedia.org/wikipedia/commons/3/34/Examplelogo.svg',
            appName: 'Texas Blockchain Website',
            environmentId: '574151de-ff7e-43c2-b948-77ec57d6093b',
          }}
        >
        <Navigation className='nav-over' />
        </DynamicContextProvider>
        <Routes>
          <Route className='page' path="/" element={<Home />} />
          <Route className='page' path="/about" element={<AboutUs />} />
          <Route className='page' path="/divisions" element={<Divisions />} />
          <Route className='page' path="/divisions/engineering" element={<Engineering />} />
          <Route className='page' path="/divisions/finance" element={<Finance />} />
          <Route className='page' path="/divisions/randw" element={<RandW />} />
          {/* <Route className='page' path="/divisions/incubator" element={<Incubator />} /> */}
          <Route className='page' path="/resources" element={<Resources />} />
          <Route className='page' path="/resources/events" element={<Events />} />
          {/* <Route className='page' path="/resources/community" element={<Community />} /> */}
          <Route className='page' path="/resources/internships" element={<Internships />} />
        </Routes>
      </Router>
      <FooterContainer />

    </div>
  );
}

export default App;