import styled from "styled-components";

const FooterComponent = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    border: 1px solid black;
    z-index: 100;
    padding-left: 2rem;
    background-color: #ccc;
    
`

const username = localStorage.getItem('username');
const role = localStorage.getItem('role');
const Footer = props =>{
    return(
        <FooterComponent className = 'footer'>
            <p>
                Xin chào {role}: {username}
            </p>
        </FooterComponent>
    )
}

export default (Footer);