import { connect } from "react-redux";
import CustomButton from "../../sharecomponent/custombutton/CustomButton";
import CustomInput from "../../sharecomponent/custominput/CustomInput";
import userAction from "../../sharecomponent/redux/action/userActions";
import FormGroup from '../../sharecomponent/formgroup/FromGroup';
import { useFormik } from "formik";
import * as Yup from 'yup';

const ForgotPassword = props =>{
    // const username = localStorage.getItem('username');


    const formik = useFormik({
        initialValues: {
            username: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3,'minimun to 3 charaters!')
                .max(15,'minimun to 15 charaters!')
                .required('required!')
        }),
        onSubmit: values =>{
            console.log(values.username);
            // console.log(props);
            props.resetPassword(values.username, '123abc');
        }
    })


    // const _resetPassword =(username)=>{
    //     props.resetPassword(username)
    // }
    return(
        <div className='resetPassword'>
            <form onSubmit={formik.handleSubmit}>
            <h3>Reset password</h3>
                <FormGroup>
                    <CustomInput 
                        label='Username *'
                        type='username'
                        name='username'
                        value={formik.values.username}
                        onChangeInput={formik.handleChange}

                    />
                    {formik.errors.username && formik.touched.username &&(
                        <p>{formik.errors.username}</p>
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
        </form>
        </div>
    )
}

const mapStateToProps = state =>{
    return{

    }
}


const mapDispathToProps = (dispatch, ownProps) =>{
    return{
        resetPassword: (username, password) =>{
            dispatch(userAction.resetPassword(username,password));
        }
    } 
}



export default connect(mapStateToProps, mapDispathToProps) (ForgotPassword);