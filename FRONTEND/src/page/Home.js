import styled from 'styled-components';
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/main";
import Slidebar from "./slidebar/Slidebar";
import Wrapped from './wrapped/wrapped';

const HomeComponent = styled.div`
    display: flex;
    // height: 100%;
`

const Home =(props)=>{
    const username = props.username;
    return(
        <HomeComponent className='home'>
            <Slidebar />
            <Wrapped />
            
        </HomeComponent>
    )
}


export default Home;