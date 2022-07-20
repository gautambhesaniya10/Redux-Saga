import axios from "axios";

// First Method

// export const loadUsersApi = async () => {
//    return await axios.get("http://localhost:5001/users");
// }

//  OR 

// Second Method
export const loadUsersApi = async () => await axios.get("http://localhost:5001/users");

export const createUsersApi = async (user) => await axios.post("http://localhost:5001/users", user);


export const delateUsersApi = async (userId) => await axios.delete(`http://localhost:5001/users/${userId}`);

export const editUsersApi = async (userId , userInfo) => await axios.put(`http://localhost:5001/users/${userId}`, userInfo);


