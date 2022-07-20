import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector , useDispatch } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import { loadUsersStart } from '../redux/action/action';

const UserInfo = () => {
  const dispatch = useDispatch();

  const { users } = useSelector(state => state.data);
  const { id } = useParams();
  const history = useNavigate();
  const singleUser = users.find(item => item.id === Number(id));

  useEffect(() => {
    dispatch(loadUsersStart())
  }, []);
  
  const LogoutHandler = () => {
    localStorage.removeItem('token');
    history("/");
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="row" style={{ margin: "auto", padding: "15px", maxWidth: "450px", alignContent: "center" }}>
        <p className="col-md-12 fs-3">Welcome User</p>
        <hr />
        <p className="col-md-6 fw-bold">ID :</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6 fw-bold">Name :</p>
        <p className="col-md-6">{singleUser.name}</p>
        <p className="col-md-6 fw-bold">Email :</p>
        <p className="col-md-6">{singleUser.email}</p>
        <p className="col-md-6 fw-bold">Phone :</p>
        <p className="col-md-6">{singleUser.phone}</p>
        <p className="col-md-6 fw-bold">Address :</p>
        <p className="col-md-6">{singleUser.address}</p>
      </div>
      <MDBBtn onClick={() => LogoutHandler()} color="danger">Logout</MDBBtn>
    </div>
  )
}

export default UserInfo