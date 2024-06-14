import actionTypes from "../contants/contant"
const toggleSidebar = () =>{
    return{
        type: actionTypes.TOGLGLE_SIDEBAR,
        paload: null
    }
}


const toggleFormGroup = (isOpen) =>{
    return{
        type: actionTypes.TOGGLE_FORM_GROUP,
        payload: {
            toggleOpenFormGroup: isOpen
        }
    }
}


const viewActions = {
    toggleSidebar,
    toggleFormGroup
}

export default viewActions;