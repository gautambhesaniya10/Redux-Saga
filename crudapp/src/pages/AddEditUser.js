import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { ceateUserStart, editUserStart } from '../redux/action/action';
import { toast } from 'react-toastify';


const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password : ""
}


const AddEditUser = () => {

  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone, address , password } = formValue;
  const [editMode, setEditMode] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector(state => state.data);


    useEffect(() => {
      if (id) {
          setEditMode(true);
          const singleUser = users.find(item => item.id === Number(id));
          setFormValue({ ...singleUser });
      }else{
          setEditMode(false);
          setFormValue({...initialState})
      }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
        if (!editMode) {
            dispatch(ceateUserStart(formValue))
            toast.success("User Added Successfully")
            setTimeout(() => history("/"), 500)
        } 
        else {
            dispatch(editUserStart({ id, formValue }));
            toast.success("User Updated Successfully")
            // setTimeout(() => history("/"), 500)
            setTimeout(() => {
              history("/")
              setEditMode(false)
            }, 500);
        }

    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <MDBValidation className="row g-0" style={{ marginTop: "30px" }} noValidate onSubmit={handleSubmit}>
      <p className="fs-2 fw bold">{!editMode ? "Sign up" : "Update User details"}</p>
      <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
        <MDBValidationItem feedback='Please Enter Your Name !' invalid>
          <MDBInput value={name || ""} name="name" type="text" onChange={onInputChange} label="Name" required /><br />
        </MDBValidationItem>

        <MDBValidationItem feedback='Please Enter Your Email !' invalid>
          <MDBInput value={email || ""} name="email" type="email" onChange={onInputChange} required label="Email"  /><br />
        </MDBValidationItem>

        <MDBValidationItem feedback='Please Enter Your Phone No !' invalid>
          <MDBInput value={phone || ""} name="phone" type="number" onChange={onInputChange} required label="Phone" /><br />
        </MDBValidationItem>

        <MDBValidationItem feedback='Please Enter Your Address !' invalid>
          <MDBInput value={address || ""} name="address" type="text" onChange={onInputChange} required label="Address"  /><br />
        </MDBValidationItem>

        <MDBValidationItem feedback='Please Enter Your Password !' invalid>
          <MDBInput value={password || ""} name="password" type="password" onChange={onInputChange} required label="Password"  /><br />
        </MDBValidationItem>

        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">{!editMode ? "Sign Up" : "Update"}</MDBBtn>
          <MDBBtn onClick={() => history("/")} color="danger">Back</MDBBtn>
        </div>
      </div>
    </MDBValidation>
  )
}

export default AddEditUser