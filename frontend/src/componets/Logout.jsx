import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handelLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
            window.location.reload(); 
        } catch (error) {
           toast.error("Error: " + error.message) ;
        }
    }

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md' onClick={handelLogout}>Logout</button>
    </div>
  )
}


