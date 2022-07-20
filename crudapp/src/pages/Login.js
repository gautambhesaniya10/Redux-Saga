import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loadUsersStart } from '../redux/action/action';


const initialState = {
    email: "",
    password: ""
}

const Login = () => {

    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState(initialState);
    const { email, password } = formValue;
    const history = useNavigate();
    const { users } = useSelector(state => state.data);

    useEffect(() => {
        dispatch(loadUsersStart())
      }, []);


    const handleSubmit = (e) => {
        if (email !== "" && password !== "") {
            const userEmail = users.find(item => item.email === email && item.password === password)
            console.log("userEmail",userEmail);
            if (userEmail !== undefined) {
               toast.success("User login sucessfully !");
               localStorage.setItem('token', JSON.stringify(userEmail.email))
               setTimeout(() => {
                history(`/userInfo/${userEmail.id}`)
               }, 1000);
            }else{
               toast.error("Please enter correct details !");
            }
        }
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <MDBValidation className="row g-0" style={{ marginTop: "30px" }} noValidate onSubmit={handleSubmit}>
            <p className="fs-2 fw bold">Login User</p>
            <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>


                <MDBValidationItem feedback='Please Enter Your Email !' invalid>
                    <MDBInput value={email || ""} name="email" type="email" onChange={onInputChange} required label="Email" /><br />
                </MDBValidationItem>

                <MDBValidationItem feedback='Please Enter Your Password !' invalid>
                    <MDBInput value={password || ""} name="password" type="password" onChange={onInputChange} required label="Password" /><br />
                </MDBValidationItem>

                <div className="col-12">
                    <MDBBtn style={{ marginRight: "10px" }} type="submit">Login</MDBBtn>
                    <MDBBtn onClick={() => history("/")} color="danger">Back</MDBBtn>
                </div>
            </div>
        </MDBValidation>
    )
}

export default Login