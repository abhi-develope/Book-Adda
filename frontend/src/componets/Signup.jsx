import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <div className="flex h-screen items-center justify-center " >
        
      <div  className="w-[600px]" >
        <div className="modal-box p-8">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
        </form>
        <h3 className="font-bold text-lg">Signup</h3>
        <div className="space-y-2 p-8">
          <p>Name</p>
          <input
            className="p-2 outline-none border rounded-md"
            type="text"
            placeholder="Enter your name"
          />
          <p>Email</p>
          <input
            className="p-2 outline-none border rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <p>Password</p>
          <input
            className="p-2 outline-none border rounded-md"
            type="text"
            placeholder="Enter your password"
          />
          <div className=" space-x-4 pt-2">
          <input type="radio" id="male" name="sex" value="male" /> {"Male"}
          
            <input className="" type="radio" id="female" name="sex" value="female" /> {"Female"}
          
          </div>
          <div className="flex justify-between items-center pt-2">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md ">
              Signup
            </button>
            <p>Have account?{" "}
                <button className="underline text-red-500 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>
                    
                Login
                </button>{" "}
            <Login/>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
