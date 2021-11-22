import styled from 'styled-components';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// import Play from '../assets/Play';

const Wrapper = styled.div`
    width: 100%;
`; 
const Title = styled.div`  
    position: absolute;
    left: 50%;
    top: 32%;
    transform: translate(-50%, -50%);
`;

const Player = styled.div` 
    position: absolute;
    left: 43%;
    top: 55%;
    transform: translate(-50%, -50%);
`;

const visual = () => {
    return (
        <Wrapper>
            <Title>
                <Zoom>
                    <img className="visual-title" src="images/title.png" alt="title"></img>
                </Zoom>
            </Title>
            <Player>
                    <img className="play play1" src="images/p1.png"></img>
                <Fade bottom>
                    <img className="play play2" src="images/p2.png"></img>
                </Fade>
            </Player>
        </Wrapper>
   
    );
};



export default visual;