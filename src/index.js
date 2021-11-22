import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/header'; 
import Visual from './components/visual'; 
import Webdesign from './pages/webdesign';
import Design from './pages/design';
import Profile from './pages/profile';
import GlobalStyle from './GlobalStyle';
import ReactFullpage from '@fullpage/react-fullpage';

import './style.scss';

const anchors = ['인트로', '웹디자인', '작업물', '프로필'];

const Full = styled.div`  background-color: #19283B`;

const Index = () => (
  <ReactFullpage
    anchors = {anchors}
    scrollingSpeed = {1000} 
    navigation
    navigationTooltips = {anchors}
    showActiveTooltip
 
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Full>
            <div className="section visual">
              <Header/>
              <Visual/>
            </div>
            <div className="section">
              <Header/>
              <Webdesign/>
            </div>
            <div className="section">
              <Header/>
              <Design/>
            </div>
            <div className="section">
              <Header/>
              <Profile/>
            </div>
          </Full>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
