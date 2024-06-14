import { Link } from "react-router-dom"
import styled from "styled-components";
import { withRouter } from "react-router";


const  GroupLink = styled.div`
    .menu-item{
        color: #fff;
        text-decoration: none;
        padding: 20px 18px;
        display: flex;
        align-items: center;
    }

    .menu-item:hover{
        color: orange;
    }

    .menu-item span{
        margin-left: 20px;
    }

    .menu-item.active{
        color: #39f;
    }

`
const CustomLinks = props =>{

    // console.log(props);
    
    const itemLink= (item,index) =>{
        let active = false;
        if(props.location.pathname === item.link){
            active = true;
        }
        return(
            <Link
                key ={index}
                className={active ?'menu-item active' : 'menu-item'}
                to={item.link}
            >
            <i className={item.icon}></i>
            <span>{item.text}</span>
            </Link>
        )
    }
    return(
        <GroupLink>
            {
                props.menuLinks.map((item, index)=>{
                    return itemLink(item, index);
                })
                
            }
        </GroupLink>
    )
}


export default withRouter(CustomLinks);