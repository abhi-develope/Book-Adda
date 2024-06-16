import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="space-y-2">
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
            <div className="flex justify-between items-center pt-2">
              <button className="bg-red-500 text-white px-2 py-1 rounded-md ">
                Login
              </button>
              <p>
                Not registered?
                <Link to = "signup" className="underline text-blue-500"> Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
