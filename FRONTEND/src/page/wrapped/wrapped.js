import Slidebar from "../slidebar/Slidebar"
import Header from "../header/Header"
import styled from "styled-components";
import Main from "../main/main";
import Footer from "../footer/Footer";
import { connect } from "react-redux";
import './wrapper.css';



const WrappedContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    margin-left: 16rem;
`

const Wrapped = props =>{
    return(
        <WrappedContainer className ={props.sibarIsOpen ? 'wrapper' : 'wrapper close'}>
            <Header />
            <Main />
            <Footer />
        </WrappedContainer>
    )
}
const mapStateToProps = state =>{
    return{
        sibarIsOpen: state.view.sidebarIsOpen
    }
}
export default connect(mapStateToProps, null)(Wrapped);