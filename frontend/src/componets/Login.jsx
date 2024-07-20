import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios
          .post("http://localhost:4002/user/login", userInfo)
          .then((res) => {
            if (res.data) {
              toast.success('login Successfully');
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error:" + err.response.data.message);
            }
          });

      }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="space-y-2">
            <p>Email</p>
            <input
              className="p-2 outline-none border rounded-md"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <br />
             {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            <p>Password</p>
            <input
              className="p-2 outline-none border rounded-md"
              type="text"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <br />
             {errors.password && <span className="text-sm text-red-500">This field is required</span>}
             </div>
            <div className="flex justify-between items-center pt-2">
            
              <button className="bg-red-500 text-white px-2 py-1 rounded-md ">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to = "signup" className="underline text-blue-500"> Signup</Link>{" "}
              </p>
            </div>
            </form>
          </div>
      </dialog>
        </div>
    
  );
}

export default Login;
