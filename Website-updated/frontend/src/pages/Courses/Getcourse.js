import React from 'react'
import jwtDecode from 'jwt-decode';

const getCurrentUser=()=>{
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}
export default getCurrentUser
