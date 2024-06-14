import { connect } from "react-redux";
import styled from "styled-components";
import CustomLinks from "../../sharecomponent/customlinks/CustomLink";
import menuLinks from '../../sharecomponent/data/menuLinks';
// import './sidebar.css';

const SidebarComponent = styled.div`
    // .sidebar{

        width: 16rem;
        height: 100vh;
        background-color: #3C4B64;
        color: white;
        position: fixed;/*important*/
        top: 0;
        left: ${p => p.sidebarIsOpen ? '0' : '-16rem'};
        bottom: 0;
        transition: left ease-in-out .2s;
    // }


    .sidebar-header h1{
        padding: 8px;
        text-align: center;
        border-bottom: 1px solid #fff;
    }


    // .sidebar.close {
    //     left: -16px;
    // }
`


const Slidebar = props =>{
    console.log(props.sidebarIsOpen)
    return(
        <SidebarComponent {...props}
        //  className={props.sidebarIsOpen ? 'sidebar' : 'sidebar close'}
        >
            <div className='sidebar-header'>
                <h1>Menu</h1>
            </div>
            <div className='sidebar-menu'>
                <CustomLinks menuLinks={menuLinks}/>
            </div>
        </SidebarComponent>
    )
}
const mapStateToProps = state=>{
    return{
        sidebarIsOpen: state.view.sidebarIsOpen
    }
}

export default connect(mapStateToProps, null) (Slidebar);