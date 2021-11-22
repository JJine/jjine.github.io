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
                    <div className="box box1"></div>
                {/* </Link> */}
                
                <div className="box box2"></div>
                <div className="box box3"></div>
                {/* <img className="box box2" src="images/a1.png"></img> */}
                {/* <img className="box box3" src="images/a1.png"></img> */}
            </Content>
        </Wrapper>
    );
};

export default design;