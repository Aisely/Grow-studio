import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { Loading } from "../Loading";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import { check } from "prettier";
import Modal from "../Loading/Modal";

const Landing = ({ supabaseKey }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [fullname, setFullname] = useState("");
  const [students, setStudents] = useState("");
  const [checkFullname, setCheckFullname] = useState([]);
  const [checkOtp, setCheckOtp] = useState("");
  const [fullnameErrorAlert, setFullnameErrorAlert] = useState(false);
  const [otpErrorAlert, setOtpErrorAlert] = useState(false);
  const [fullnamespinner, setFullnameSpinner] = useState(false);
  const [otpspinner, setOtpSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notMatch, setNotMatch] = useState(false);
  const [modal, setModal] = useState(false);
  const [checkValidationIcon, setValidationIcon] = useState("");

  const supabaseUrl = "https://omggdzphlnhdxgvsfsbe.supabase.co";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const readSupabase = async () => {
    let { data: Students, error } = await supabase
      .from("Students")
      .select("fullname, otp");

    setStudents(Students);
    if (!error) {
      const arrFullname = [];
      const arrOtp = [];
      for (let i = 0; i < Students.length; i++) {
        arrFullname[i] = Students[i].fullname;
        arrOtp[i] = Students[i].otp;
      }

      setFullnameSpinner(false);
      setOtpSpinner(false);

      if (arrFullname.includes(fullname)) {
        setCheckFullname(true);
        console.log("fullname is ", arrFullname.includes(fullname));
      } else {
        setCheckFullname(false);
        console.log(false);
      }

      if (arrOtp.includes(parseInt(otp))) {
        setCheckOtp(true);
        console.log("OTP is ", arrOtp.includes(parseInt(otp)));
      } else {
        setCheckOtp(false);
      }
    } else {
      alert("Error from supabase, maybe network error", error);
    }
  };

  useEffect(() => {
    console.log("readsupabase ran")
    readSupabase();
  }, [fullnamespinner, otpspinner]);

  const onAuthenticate = (e) => {
    e.preventDefault();
    console.log('work')
    return router.push("/home")

    console.log("reach oo", students);
    setLoading(true);
    if (checkFullname && checkOtp) {
      setLoading(false);
      console.log("arr of students", students);
      console.log({ fullname: fullname, otp: parseInt(otp) });
      const result = students.find((item) => item.otp === parseInt(otp));
      console.log(result);
      if (result !== undefined) {
        if (result.fullname === fullname) {
          setModal(true);
          setTimeout(() => {
            router.push("/home");
          }, 2000);
          // console.log("IT MATCHED");
          // alert("NOW you are logged In");
        } else {
          setNotMatch(true);
        }
      } else {
        console.log("shit was undefined okayyyyy");
      }
    } else {
      setLoading(false);
      if (!checkFullname) {
        setFullnameErrorAlert(true);
      }
      if (!checkOtp) {
        setOtpErrorAlert(true);
      }
    }
    // check if fullname is valid
    // if ()
    //check if otp is valid

    //generate id for user

    //create new user using email and id as credentials. id being the password

    //redirect to dashboard
  };
  
  const FullnameValidationIcon = () => {
    return checkFullname ? (
      <BiCheckCircle size={21} color="#16e585" />
    ) : (
      <BiErrorCircle size={21} color="#e53d3d" />
    );
  };
  const OtpValidationIcon = () => {
    return checkOtp ? (
      <BiCheckCircle size={21} color="#16e585" />
    ) : (
      <BiErrorCircle size={21} color="#e53d3d" />
    );
  };

  return (
    <div className="flex h-[800px] w-full items-center justify-center">
      {!modal ? (
        <form action="" id="login" onSubmit={onAuthenticate}>
          <div className="max-w-[700px]">
            <div className="mb-6">
              {/* <h3 className="mb-2 text-2xl ">Login</h3> */}
            </div>

            <div className=" rounded-md border  border-[#436664] bg-[#3c5c5a] shadow">
              <div>
                <div className="undefined block grid grid-cols-12 gap-6  px-8  py-8 opacity-100">
                  <label className="text-scale-1200 col-span-12 text-2xl lg:col-span-5 ">
                    Login
                  </label>
                  <div className="relative col-span-12 flex flex-col gap-7 lg:col-span-7">
                    {" "}
                    {/* wrapper for input boxes */}
                    <div className="grid gap-3 text-sm leading-4 md:grid md:grid-cols-12 md:gap-x-4">
                      <div className="col-span-12 flex flex-row justify-between space-x-2">
                        <div>
                          <label className="text-scale-1100 block break-all text-lg leading-4">
                            Full name
                          </label>
                          <p className="mt-1 text-xs opacity-70">
                            Fill in your full name you used to register
                          </p>
                        </div>
                      </div>
                      <div className="relative col-span-12 ">
                        <span className="absolute right-0 mr-2 flex h-full items-center">
                          {fullnamespinner ? (
                            <Loading
                              color="#16e585"
                              strokeWidth={4}
                              strokeWidthSecondary={4}
                              height={18}
                              width={18}
                            />
                          ) : fullname !== "" ? (
                            <FullnameValidationIcon />
                          ) : null}
                        </span>
                        <input
                          value={fullname}
                          onChange={(event) => {
                            setFullnameSpinner(true);
                            setFullnameErrorAlert(false);
                            setNotMatch(false);
                            setFullname(event.target.value);
                          }}
                          disabled={loading}
                          className={
                            "focus:border-  focus:ring-scale-400 border-scale-700 box-border block w-full rounded-md  border-2  border-[#436664] bg-[#3c5c5a] px-3 py-2 text-sm leading-4 shadow-sm  outline-none  transition-all focus:border-[#55817f] focus:shadow-md focus:ring-[#436664]"
                          }
                        />
                        {fullnameErrorAlert ? (
                          <p className="absolute mt-1 text-xs text-[#e53d3d]">
                            Fullname is incorrect
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid gap-3 text-sm leading-4 md:grid md:grid-cols-12 md:gap-x-4">
                      <div className="col-span-12 flex flex-row justify-between space-x-2">
                        <div>
                          <label className="text-scale-1100 block break-all text-lg leading-4">
                            OTP code
                          </label>
                          <p className="mt-1 text-xs opacity-70">
                            Fill in the code that was given to you after manual
                            registration
                          </p>
                        </div>
                      </div>
                      <div className="relative col-span-12">
                        <span className="absolute right-0 mr-2 flex h-full items-center">
                          {otp !== "" ? (
                            otpspinner ? (
                              <Loading
                                color="#16e585"
                                strokeWidth={4}
                                strokeWidthSecondary={4}
                                height={18}
                                width={18}
                              />
                            ) : otp !== "" ? (
                              <OtpValidationIcon />
                            ) : null
                          ) : null}
                        </span>
                        <input
                          value={otp}
                          onChange={(event) => {
                            setOtpSpinner(true);
                            setOtpErrorAlert(false);
                            setNotMatch(false);
                            setOtp(event.target.value);
                          }}
                          disabled={loading}
                          className="focus:border-  focus:ring-scale-400 border-scale-700 box-border block w-full rounded-md  border-2 border-[#436664] bg-[#3c5c5a] px-3 py-2 text-sm leading-4 shadow-sm  outline-none  transition-all focus:border-[#55817f] focus:shadow-md focus:ring-[#436664]"
                        />
                        {otpErrorAlert ? (
                          <p className="absolute mt-1 text-xs text-[#e53d3d]">
                            Otp is incorrect
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {notMatch ? (
                      <div className="flex items-center">
                        <BiErrorCircle size={21} color="#e53d3d" />
                        <p className="ml-1 truncate text-xs text-[#e53d3d]">
                          The Full name and OTP code do not match.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="border-[#436664]"></div>

                <div className="flex py-4 px-8">
                  <div className="flex w-full justify-end">
                    {/* {loading ? ( */}
                    <button className="rounded bg-[#66cee9] px-5 py-2 text-[14px] opacity-90 hover:bg-[#6fe1fd] hover:opacity-100">
                      <span className="truncate">Login</span>
                    </button>
                    {/*  ) : (
                     <Loading />
                   )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
      {modal ? <Modal fullname={fullname} /> : null}
    </div>
  );
};
export default Landing;
