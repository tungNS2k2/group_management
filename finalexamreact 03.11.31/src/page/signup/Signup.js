import styled from "styled-components";
import { MdGroupAdd } from "react-icons/md";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
import FormGroup from "../../sharecomponent/formgroup/FromGroup";
import CustomInput from "../../sharecomponent/custominput/CustomInput";
import CustomButton from "../../sharecomponent/custombutton/CustomButton";
import userAction from "../../sharecomponent/redux/action/userActions";
import { useEffect } from "react";

const SignupContainer = styled.div`
max-width: 400px;
    margin: auto;
    margin-top: 1.5rem;

    .name {
        display: flex;
    }

    .name > div:first-child {
        margin-right: 5px;
    }
    .name > div:last-child {
        margin-left: 5px;
    }

    .signup-header h1 {
        text-align: center;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .signup-avatar {
        width: 40px;
        height: 40px;
        background-color: #9c27b0;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }

    .btn-submit {
        margin-top: 2rem;
    }

    .group-link {
        margin-top: 1.35rem;
        display: flex;
        flex-direction: row-reverse;
    }

    .group-link a{
        color: #1976d2;
        font-weight: 400;
        letter-spacing: 0.01em;
        font-size: 0.875rem;
    }

    .copy-right {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
        letter-spacing: 0.01071em;
        font-size: 0.875rem;
        margin-top: 4rem;
        text-align: center;
    }

    .copy-right a {
        color: rgba(0, 0, 0, .6);
    }


    .signup-main .form-group p{
        color: red;
        font-size: 0.8rem;
        position: absolute;
    }  


    .signup-main>p:first-child{
            color: red;
            font-size: 0.8rem;
            text-align: center;
            margin-top: 0.5rem;
    }
`;

const Signup = props =>{

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            role: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2,'minimum 2 characters')
                .max(15,'maximum 15 characters')
                .required('required!'),
            lastName: Yup.string()
                .min(2,'minimum 3 characters')
                .max(15,'maximum 20 characters')
                .required('required!'),
            username: Yup.string()
                .min(6,'minimum 2 characters')
                .max(15,'maximum 15 characters')
                .required('required!'),
            email: Yup.string()
                .email('invalid email format') 
                .required('required!'),
            password: Yup.string()
                .min(6,'minimum 6 characters')
                .max(20,'maximum 20 characters')
                .required('required!'),            
            role: Yup.string()
                .oneOf(['ADMIN', 'MANAGER', 'EMPLOYEE'])
                .required('Requird!')
        }),
        onSubmit: values =>{
            props.Signup(values);
        }
    })
    // console.log(props.errSignup)
    // console.log(props.isLoading)
    useEffect(()=>{
        props.showLoading(props.isLoading);
    }, [props.isLoading])

    return(
        <SignupContainer>
            <div className='signup-header'>
                <div className='signup-avatar'>
                    <MdGroupAdd size = '1.36rem' />
                </div>
                <h1>Sign up</h1>
            </div>


            <form className='signup-main' onSubmit={formik.handleSubmit}>
                <div className = 'name'>
                    {/* <p>{props.errSignup}</p> */}
                    <FormGroup>
                        <CustomInput 
                            label ='First Name *'
                            type='text'
                            name='firstName'
                            value = {formik.firstName}
                            onChangeInput={formik.handleChange}
                        />

                        {
                            formik.errors.firstName && formik.touched.firstName && (
                                <p>{formik.errors.firstName}</p>
                            )
                        }
                    </FormGroup>
                    <FormGroup>
                        <CustomInput
                            label='Last Name *'
                            type='text'
                            name='lastName'
                            value={formik.lastName}
                            // onChangeInput={_onChangeInput}
                                onChangeInput={formik.handleChange}
                        />
                        {
                            formik.errors.lastName && formik.touched.lastName &&(<p>{formik.errors.lastName}</p>)
                        }
                    </FormGroup>
                </div>
                <FormGroup>
                    <CustomInput
                        label='Username *'
                        type='text'
                        name='username'
                        value= {formik.username}
                        // onChangeInput={_onChangeInput}
                        onChangeInput={formik.handleChange}
                    />
                    {
                        formik.errors.username && formik.touched.username && (
                            <p>{formik.errors.username}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Email *'
                        type='email'
                        name='email'
                        value={formik.email}
                        // onChangeInput={_onChangeInput}
                        onChangeInput={formik.handleChange}
                    />
                    {
                        formik.errors.email && formik.touched.email && (
                            <p>{formik.errors.email}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Password *'
                        type='password'
                        name='password'
                        value={formik.password}
                        // onChangeInput={_onChangeInput}
                        onChangeInput={formik.handleChange}
                    />
                    {
                        formik.errors.password && formik.touched.password &&(
                            <p>{formik.errors.password}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Role *'
                        type='text'
                        name='role'
                        value={formik.role}
                        onChangeInput={formik.handleChange}
                    />
                    {
                        formik.errors.role && formik.touched.role && (
                            <p>{formik.errors.role}</p>
                        )
                    }
                </FormGroup>
                <div className='btn-submit'>
                    {/* <CustomButton title='Sign up'/> */}
                    <CustomButton
                        type='submit'
                        color='#ffffff'
                        width='100%'
                        uppercase
                        // onClick={handleSubmitForm}
                    >
                        Sign up
                    </CustomButton>
                </div>
                <div className='group-link'>
                    <Link to='/signin'>
                        Already have an account? Sign in
                    </Link>
                </div>
                <p className='copy-right'> Copyright &copy; &nbsp;
                    <Link to='/'>Your Wbsite</Link>&nbsp;2022
                </p>

            </form>
        </SignupContainer>
    )
}

const mapStateToProps = state =>{
    return{
        isLoading: state.user.isLoading,
        errSignup: state.user.signupErr
    }
}


const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        Signup: (user) =>{
            dispatch(userAction.Signup(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Signup);