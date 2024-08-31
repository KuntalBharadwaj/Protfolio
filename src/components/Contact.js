import React, { useRef, useState } from "react";
import "./Profile.css";
import emailjs from "@emailjs/browser";
import { ErrorEle } from "./Error";
import { SuccessEle } from "./Error";

// require('dotenv').config()

const Contact = () => {
  const form = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_KEY)
    console.log(process.env.REACT_APP_PUBLIC_KEY)
    console.log(process.env.REACT_APP_TAMPLATE_KEY)
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TAMPLATE_KEY, form.current, {
        publicKey:process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
          console.log("FAILED...", error.message);
        }
      );
  };

  return (
    <>
      <div className="py-8 px-4 bg-gradient-to-tr from-black via-black to-[#01023c]">
        <h2 className="text-center text-slate-200 mt-2 text-4xl font-bold animated-heading">
          Contact Me
        </h2>
        <form ref={form} onSubmit={Handlesubmit}>
          <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white">First Name</label>
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full p-2 border bg-slate-500 border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-white">Last Name</label>
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="w-full p-2 border bg-slate-500 border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-white">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border bg-slate-500 border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-white">Mobile No.</label>
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-2 border bg-slate-500 border-gray-300 rounded mt-1"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-white">Message</label>
              <textarea
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border bg-[#b7b7f0] border-gray-300 rounded mt-1"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#100f56] text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="mt-2">
          {Error ? <ErrorEle /> : ""}
          {Success ? <SuccessEle /> : ""}
        </div>
      </div>
    </>
  );
};

export default Contact;
