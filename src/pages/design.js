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
                <a href="https://grizzly-plutonium-d98.notion.site/Electric-energy-ECO-1362c8916e6749659497b2578c0a91c6" target="_blank">
                    <div className="card">
                        <img src="images/b1.png"></img>
                        <p className="z">
                            <span className="green">[공모전]</span>
                            &nbsp; 에코 영수증 <span className="yellow">- 금상</span>
                        </p>    
                    </div>
                </a>
            </Fade>

            <a href="https://grizzly-plutonium-d98.notion.site/d0d887570e044dffb938b657100c34e1" target="_blank">
                <div className="card">
                    <img src="images/b2.png"></img>    
                    <p className="z">
                        <span className="blue">[공모전]</span>
                        &nbsp; 테스형
                    </p> 
                </div>
            </a>
            
            <a href="https://grizzly-plutonium-d98.notion.site/2b900774b9ec4e22aa52320125b69664" target="_blank">
                <div className="card">
                    <img src="images/b3.png"></img>  
                    <p className="z">
                        <span className="b1">[공모전]</span>
                        &nbsp; 나의 지원금을 부탁해
                    </p>   
                </div>
            </a>
            <a href="" target="_blank">
                <div className="card">
                    <img src="images/b3.png"></img>    
                    <p className="z">
                        <span className="green">[공모전]</span>
                        &nbsp; ICT
                    </p> 
                </div>
            </a>
        </Wrapper>
        <Wrp>
            <a href="" target="_blank">
                <div className="card">
                    <img src="images/b4.png"></img>  
                    <p className="z">
                        <span className="b">[프로젝트]</span>
                        &nbsp; 리뷰온
                    </p>   
                </div>
            </a>
            <a href="" target="_blank">
                <div className="card">
                    <img src="images/b6.png"></img>  
                    <p className="z">
                        <span className="b2">[프로젝트]</span>
                        &nbsp; 루킹
                    </p>   
                </div>
            </a>
        </Wrp>
      </>
    );
};

export default Work;