import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
    position: absolute;
    top: 12%;
    left: 13.5%;
    display: flex;
    color: #fff;
`;

const Wrp = styled.div`
    position: absolute;
    top: 55%;
    left: 13.5%;
    display: flex;
    color: #fff;
`;

const Work = () => {
    return (
        <>
        <Wrapper>
            <Fade bottom>
                   <div className="card">
                <img src="images/b1.png"></img>
                <p className="z">
                    <span className="green">[공모전]</span>
                    &nbsp; 전기 에너지 분야 <span className="yellow">- 금상</span>
                </p>    
            </div>
               </Fade>
            <div className="card">
                <img src="images/b2.png"></img>    
                 <p className="z">
                    <span className="blue">[공모전]</span>
                    &nbsp; 정부24
                </p> 
            </div>
            <div className="card">
                <img src="images/b3.png"></img>  
                 <p className="z">
                    <span className="b1">[공모전]</span>
                    &nbsp; ICT
                </p>   
            </div>
            <div className="card">
                <img src="images/b3.png"></img>    
                  <p className="z">
                    <span className="green">[공모전]</span>
                    &nbsp; ICT
                </p> 
            </div>
         
         
        </Wrapper>
        <Wrp>
            <div className="card">
                <img src="images/b4.png"></img>  
                 <p className="z">
                    <span className="b">[프로젝트]</span>
                    &nbsp; 리뷰온
                </p>   
            </div>
            <div className="card">
                <img src="images/b6.png"></img>  
                 <p className="z">
                    <span className="b2">[프로젝트]</span>
                    &nbsp; 루킹
                </p>   
            </div>
        </Wrp>
      </>
    );
};

export default Work;