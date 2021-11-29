import styled from 'styled-components';


const Wrapper = styled.div`
    color: #fff;
`;

const Profile = () => {
    return (
        <>
            <Wrapper>
                <img className="pro-img" src="images/p3.png"></img>
                <div className="so-img">
                    <img src="images/so-title.png"></img>
                </div>
                <img src="images/profile1.png"></img>
                <div className="etc">이 사이트는 직접 제작하였습니다.</div>
            </Wrapper>
        </>
    );
};

export default Profile;