import { connect } from "react-redux";
import CustomButton from "../../sharecomponent/custombutton/CustomButton";
import CustomInput from "../../sharecomponent/custominput/CustomInput";
import userAction from "../../sharecomponent/redux/action/userActions";
import FormGroup from '../../sharecomponent/formgroup/FromGroup';
import { useFormik } from "formik";
import * as Yup from 'yup';

const ResetPassword = props =>{
    const username = localStorage.getItem('username');

    const _randomPassword = () => {
        let pattern = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < 8; i ++) {
            password += pattern[Math.floor(Math.random() * pattern.length)]
        }
        return password;
    }


    const formik = useFormik({
        initialValues: {
            // email: ''
        },
        validationSchema: Yup.object({
        //     email: Yup.string()
        //         .email('invalid email format') 
        //         .required('required!')
        }),
        onSubmit: (_resetPassword) =>{
            props.resetPassword(username, _resetPassword);
        }
    })


    // const _resetPassword =(username)=>{
    //     props.resetPassword(username)
    // }
    return(
        <form onSubmit={formik.handleSubmit}>
            <h3>Reset password</h3>
                {/* <FormGroup>
                    <CustomInput 
                        label='Pass *'
                        type='email'
                        name='email'
                        value={formik.values.email}
                        onChangeInput={formik.handleChange}

                    />
                    {formik.errors.email && formik.touched.email &&(
                        <p>{formik.errors.email}</p>
                    )}
                </FormGroup> */}
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
    )
}

const mapStateToProps = state =>{
    return{

    }
}


const mapDispathToProps = (dispatch, ownProps) =>{
    return{
        changePassword: (username, password) =>{
            dispatch(userAction.changePassword(username, password));
        }
    } 
}



export default connect(mapStateToProps, mapDispathToProps) (ResetPassword);