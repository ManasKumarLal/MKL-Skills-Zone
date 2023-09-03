import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full bg-[lightseagreen] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="mx-3">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white">
            Sign up to our new letter and stay up to date
          </span>
        </div>
        <div className="mx-3">
          <input
            type="email"
            placeholder="Email"
            className="p-2 mb-2 mr-2 w-[190px] rounded  text-slate-300"
          />
          <button className="w-[100px] bg-black text-white rounded py-3 px-5 text-[12px]">
            Get Started
          </button>
          <br />
          <p className="text-white my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            <a href="" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
