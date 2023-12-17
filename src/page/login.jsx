


import logo from "../../public/solar_link-circle-bold.svg";
import lock from "../../public/ph_lock-key-fill.svg";
import en from "../../public/ph_envelope-simple-fill.svg";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

const Li = (props) => {
  return (
    <>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">{props.nom}</span>
        </div>
        <div className="w-full  relative">
          <img
            src={props.img}
            alt=""
            className="absolute w-7 top-[11px] left-[8px]"
          />
          
          <input
            type={props.nom=="Password" ? "password" : "text"}
            placeholder={props.pl}
            className="pl-[60px] input input-bordered bg-white w-full text-[20px] "
            onChange={(e)=>
            {
             if(props.mail) props.mail(e.target.value)
            }}
          />
        </div>
      </label>
    </>
  );
};



const Login=(props)=>
{
  const [mail,setmail]=useState("");
  const [password,setpassword]=useState("")
const mai=(e)=>{
setmail(e);
}
const pass=(e)=>{
  setpassword(e);
  }
  return(
<>
<div className=" w-full h-screen bg-base-100">
        <div className=" w-[476px]   m-auto mt-[20px]    ">
          {/* top */}
          <div className="w-full flex bg-base-100  justify-center  h-[70px] ">
            <img src={logo} alt="" className="h-[50%]" />
            <h1 className=" font-bold font-sans text-4xl">devlinks</h1>
          </div>

          {/* bottom */}
          <div className=" ">
            {/* taitle */}
            <div className="pl-[40px] bg-base-200  rounded-t-lg mb-[-30px] pb-[30px]">
              <h1 className="font-bold text-[55px] mb-3 ">Login</h1>
              <p className=" text-neutral text-[18px]">
                Add your details below to get back into the app
              </p>
            </div>
            {/* input */}
            <form action="" className="w-full flex flex-col gap-5 mt-[30px] bg-base-200    p-[30px] ra" onSubmit={
             async (e)=>
              {
                e.preventDefault();
                const res = await fetch("http://127.0.0.1:3000/api/login", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({mail,password}),
              });

              if(res.status==200) {
                console.log(props.user);
                   
                const data = await res.json();
                props.setuser(data)
                console.log(props.user);
      
              } 
              }
            }>
              <Li nom="Email address" pl="e.g. alex@email.com" img={en}  mail={mai} />
              <Li nom="Password" pl="Enter your password" img={lock}  mail={pass}/>
              <button className="btn mt-[50px] btn-primary text-base ">Login</button>
              <p className="text-center text-lg ">
            Don’t have an account?  <Link to='../sing-up'><span className="text-primary font-semibold">Create account</span></Link>
            </p>
            </form>
           
          </div>
        </div>
      </div>


</>
    )
}
export default Login;