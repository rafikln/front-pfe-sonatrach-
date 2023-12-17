
import logo from "../../public/solar_link-circle-bold.svg";
import lock from "../../public/ph_lock-key-fill.svg";
import en from "../../public/ph_envelope-simple-fill.svg";
import {Link} from "react-router-dom"

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
            type={props.nom=="Password" ||    props.nom=="Confirm password" ? "password" : "text"}
            placeholder={props.pl}
            className="pl-[60px] input input-bordered bg-white w-full text-[20px] "
          />
        </div>
      </label>
    </>
  );
};



const Singup=()=>
{
    return(
<>
<div className=" w-full h-screen bg-base-100">
        <div className=" w-[476px]   m-auto mt-[20px]    ">
          {/* top */}
          <div className="w-full flex bg-base-100  justify-center  h-[70px] ">
            <img src={logo} alt="" className="h-[70%]" />
            <h1 className=" font-bold font-sans text-4xl">devlinks</h1>
          </div>

          {/* bottom */}
          <div className=" ">
            {/* taitle */}
            <div className="pl-[40px] bg-base-200  rounded-t-lg mb-[-30px]">
              <h1 className="font-bold text-[55px] mb-3 ">Create account</h1>
              <p className=" text-neutral text-[18px]">
              Let’s get you started sharing your links!
              </p>
            </div>
            {/* input */}
            <form action="" className="w-full flex flex-col gap-5 mt-[30px] bg-base-200    p-[30px] ra">
              <Li nom="Email address" pl="e.g. alex@email.com" img={en} />
              <Li nom="Password" pl="Enter your password" img={lock} />
              <Li nom="Confirm password" pl="Enter your password" img={lock}  />
              <button className="btn btn-primary text-base mt-6">Create new account</button>
              <p className="text-center text-lg ">
              Already have an account?   <Link to='../login'><span className="text-primary font-semibold">Login</span></Link>
            </p>
            </form>
           
          </div>
        </div>
      </div>


</>
    )
}
export default Singup;