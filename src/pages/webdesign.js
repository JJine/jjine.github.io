import styled from 'styled-components';
import { pdfjs } from 'react-pdf';
// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
`; 

const Sub = styled.div`
    position: absolute;
    left: 50%;
    top: 24%;
    transform: translate(-50%, -50%);
`;

const Content = styled.div`
    width: 100%;
`;

const design = () => {
    return (
        <Wrapper>
            <Sub>
                <img className= "sub-title" src="images/web.png"></img>
            </Sub>
            <Content>
                {/* <Link to="/starterdy"> */}
                    <a href="https://grizzly-plutonium-d98.notion.site/da3e355f31074356bfdbb7e0af1f9f42" target="_blank">
                        <div className="box box1"></div>    
                    </a> 
                {/* </Link> */}
                
                <a href="https://grizzly-plutonium-d98.notion.site/MSG-GG-1b4b41261e5f4bf8a041b6383b9c2a7a" target="_blank">
                    <div className="box box2"></div>
                </a>
                <a href="https://grizzly-plutonium-d98.notion.site/91fb430db4f147d695c720687669b315" target="_blank">
                    <div className="box box3"></div>
                </a>
                {/* <img className="box box2" src="images/a1.png"></img> */}
                {/* <img className="box box3" src="images/a1.png"></img> */}
            </Content>
        </Wrapper>
    );
};

export default design;