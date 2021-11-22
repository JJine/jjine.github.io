// import React, {useState} from 'react';
import styled from 'styled-components';
import Flip from "react-reveal/Flip";
// import title from '../assets/title.png';
// import aseets from '../'   


const Nav = styled.div`
    display: flex;

    position: absolute;
    top: 3%; 
    left: 34%;
`;

const head = () => {
    return (
        <Nav>
            <Flip top>
                <div className="title active" data-menuanchor="인트로" data-tooltip="인트로"><a href="#인트로"><img src="images/e2.png"></img></a></div>
                <div className="title" data-menuanchor="웹디자인" data-tooltip="웹디자인" ><a href="#웹디자인"><img src="images/e3.png"></img></a></div>
                <div className="title" data-menuanchor="작업물" data-tooltip="작업물" ><a href="#작업물"><img src="images/e4.png"></img></a></div>
                <div className="title" data-menuanchor="프로필" data-tooltip="프로필" ><a href="#프로필"><img src="images/e5.png"></img></a></div>
            </Flip>
        </Nav>
    );
};



export default head;
   