import actionTypes from "../contants/contant";

const initState = {
    sidebarIsOpen: true,
    formGroupIsOpen: false
}

const viewReducer = (state=initState, action) =>{
    switch(action.type){
        case actionTypes.TOGLGLE_SIDEBAR:
            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
            }
            case actionTypes.TOGGLE_FORM_GROUP:
            
            
                console.log(action.payload.toggleOpenFormGroup);

                console.log(state);
                return {
                ...state, 
                formGroupIsOpen: action.payload.toggleOpenFormGroup ? action.payload.toggleOpenFormGroup : !state.formGroupIsOpen
                }

            default:
                    return state
        }
}

export default viewReducer;