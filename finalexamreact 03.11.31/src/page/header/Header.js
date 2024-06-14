import styled from "styled-components";
import {MdMenu} from'react-icons/md';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import viewActions from "../../sharecomponent/redux/action/viewActions";
import Dropdown from '../dropdown/DropDown';


const avatarUrl = localStorage.getItem('avatarUrl')


const HeaderComponent = styled.div`
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgb(60 75 100/14%), 0 3px 1px -2px rgb(60 75 100/12%), 0 1px 5px 0 rgb(60 75 100 /20%);
    z-index: 9999;


    .menu-icon{
        cursor: pointer;
        color: rgb(0, 0, 0, .5);
        width: 30px;
        height: 30px;
    }

    .menu-icon:hover {
        color: rgb(0,0,0,.76);
    }

    .row-1{
        height: 60px;
        border-bottom: 1px solid #d8dbc0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
    }
    .nav-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 300px; */
    }
    
    .nav-left a{
        color: rgb(0, 0, 0, .5);
        text-decoration: none;
        line-height: 1.6;
        margin-left: 1rem;
    }
    
    .nav-left a:hover{
        color: rgb(0, 0, 0, .76);
    }
    
    .nav-right img {
        width: 32px;
        height: 32px;
    }
    
    .header-avatar {
        text-align: center;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        // background-image: ${p => p.avatarUrl};
        background-color: pink;
        border-radius: 60%;
        border: 1px solid black;
        color: black;
        font-size: 1.5rem;
    }

`



const Header = props =>{
    
    // const avatarUrl = props.avatarUrl;

    // const [avatarUrl, setAvatarUrl] = useState('');

    
    // console.log(props)

    // useEffect(() => {
    //     if (props.avatarUrl != null && props.avatarUrl != '') {
    //         let avatarUrl = props.avatarUrl
    //         let temp = avatarUrl.split('/')
    //         setAvatarUrl(temp[temp.length - 2] + '/' + temp[temp.length - 1])
    //     }
    // },[])
    // console.log(avatarUrl)

    const [sideIsOpen, setSidebarIsOpen] = useState(false);
    const clickMenuIcon =()=>{
    props.toggleSidebar();
    console.log(props.sidebarIsOpen);
    

    }

    // const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const username = localStorage.getItem('username').slice(0,1).toUpperCase();
    



    const _onClickAvatar = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const handleClickOutSideDropdown = ()=>{
        setDropdownIsOpen(false)
    }
    // useEffect(()=>{
    //     let temp = avatarUrl.split('/')
    //     setAvatarUrl(temp[temp.length - 2] + '/' + temp[temp.length - 1])
    // },[])
    console.log('component render')
    return(
        <HeaderComponent className='header'>
            <div className='row-1'>
                <div className='nav-left'>
                    <MdMenu className='menu-icon' onClick={clickMenuIcon} />
                    <Link to="/">Dashboard</Link>
                    <Link to="/user-info">User Info</Link>
                    <Link to="/list-group">List Group</Link>
                    <Link to="/password-change">Change Password</Link>
                    <Link to="/settings">Settings</Link>
                </div>

                <div className='nav-right'>
                    <div className='header-avatar' onClick={_onClickAvatar}>
                        {
                            // avatarUrl ? <image src ={avatarUrl}/> :
                             <p>{username}</p>
                        }
                    </div>
                    {   
                        dropdownIsOpen && <Dropdown setDropdownClose={handleClickOutSideDropdown}/>
                    }
                </div>
            </div>
        </HeaderComponent>
    )
}

const mapStateToProps = state =>{
    return{
        sidebarIsOpen: state.view.sidebarIsOpen,
        avatarUrl: state.user.userInfo.avatarUrl
    }
}


const mapDispatchToProps =(dispatch, ownProps) =>{
    return{
        toggleSidebar: ()=>{
            dispatch(viewActions.toggleSidebar())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);