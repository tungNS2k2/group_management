import styled from "styled-components";
import CustomInput from "../../sharecomponent/custominput/CustomInput";
import FormGroup from '../../sharecomponent/formgroup/FromGroup';
import CustomButton from '../../sharecomponent/custombutton/CustomButton';
import userAction from '../../sharecomponent/redux/action/userActions';
import { useFormik } from "formik";
import {connect} from 'react-redux';
import * as Yup from "yup";
import { useEffect } from "react";


const PasswordChanging = (props) => {
    // console.log(props)
    const username = localStorage.getItem('username');
    // console.log(username)

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(6, 'Minium 6 charaters')
                .max(15, 'Maximum 15 charaters')
                .required('Required!')
        }),
        onSubmit: values =>{
            props.changePassword(username, values.password);
        }
    })



    useEffect(()=>{
        props.showLoading(props.isLoading)
    },[props.isLoading])

    return (
        <div className={props.className}>
            <form 
                className="content" 
                onSubmit={formik.handleSubmit}
            >
                <h3>Change password</h3>
                <FormGroup>
                    <CustomInput 
                        label='New password *'
                        type='password'
                        name='password'
                        value={formik.values.password}
                        onChangeInput={formik.handleChange}

                    />
                    {formik.errors.password && formik.touched.password &&(
                        <p>{formik.errors.password}</p>
                    )}
                </FormGroup>
                <FormGroup>
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                    >
                        Submit
                    </CustomButton>
                </FormGroup>
                <FormGroup>
                    <p style={{color: 'blue'}}>{props.messageChangePasswordSuccess}</p>
                    <p>{props.errorMessageChangePassword}</p>
                </FormGroup>
            </form>
        </div>
    )

}

const PasswordChangingStyled = styled(PasswordChanging) `
    height: calc(100vh - 108px);
    position: relative;
    width: 400px;
    margin: auto;

    .content {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h3 {
        text-align: center;
    }

    .content .form-group p {
        color:  red;
        font-size: .8rem;
        position: absolute;
        top: 100%;
    }
`
const mapStateToProps = state =>{
    return {
        isLoading: state.user.isLoading,
        errorMessageChangePassword: state.user.errorMessageChangePassword,
        messageChangePasswordSuccess: state.user.messageChangePasswordSuccess,
    }
}

const mapDispatchToProps =(dispatch, ownProps) =>{
    return{
        changePassword: (username, password) =>{
            dispatch(userAction.changePassword(username, password));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (PasswordChangingStyled);
