import styled from "styled-components";

export const Mypage = styled.p`
    font-size: 1.8em;
    margin-top: 5vh;
    padding-left: 3vw;
`
export const Container = styled.div`
    width: 100%;
    margin-top: 2vh;
    padding: 0 3vw;
    display: flex;
    gap: 3vw;
    /* background-color: palegoldenrod; */
`
export const MemberDetailLeft = styled.div`
    width: 50%;
    /* background-color: pink; */
    .menu_container {
        display: grid;
        gap: 5%;
        grid-template-columns: repeat(2, 1fr);
    }
`
export const MenuBox = styled.div`
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    /* color: #333; */
    background-color: ${(props) => (props.isActive ? "black" : "#F0F0F0")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    transition: transform 0.2s;
    aspect-ratio: 3 / 1;
    display: flex;
    align-items: flex-end;
    text-align: left;
    h2 {
    font-weight: bold;
    }
    p {
    font-size: 16px;
    color: ${(props) => (props.isActive ? "white" : "black")};
    }
`;

export const MemberDetailRight = styled.div`
    width: 50%;
    height: 1000px;
    /* background-color: skyblue; */
`
export const TxtBox = styled.div`
    background-color: #F0F0F0;
    padding: 30px;
    border-radius: 30px;
    p { white-Space: pre-wrap; }
`