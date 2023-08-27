import React from "react"
import { AiFillFacebook,AiOutlineInstagram,AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="h-[610px] md:h-[582px] lg:h-[350px] bg-[#2699FB] ">
      <div className="max-w-[1270px] mx-auto lg:flex  justify-between gap-9 lg:pt-[58px] pt-[70px] px-5">
        <div className="lg:w-[30%]">
          <h1 className="text-3xl font-bold mb-4">WsCube Tech.</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem consectetur facilis dolor saepe dignissimos harum doloremque perferendis.
          </p>
          <div className="flex gap-[12%] text-4xl text-white mt-9 mb-16">
            <AiFillFacebook/>
            <AiOutlineInstagram/>
            <AiFillTwitterSquare/>
            <FaGithubSquare/>
          </div>
        </div>
        <div className="flex justify-between lg:w-[70%]">
          <div>
            <h6 className="mt-3 font-bold">Solutions</h6>
            <h6 className="mt-1 text-white">Analytics</h6>
            <h6 className="mt-3 text-white">Marketing</h6>
            <h6 className="mt-3 text-white">Commerce</h6>
            <h6 className="mt-3 text-white">Insights</h6>
          </div>
          <div>
            <h6 className="mt-3 font-bold">Support</h6>
            <h6 className="mt-1 text-white">Pricing</h6>
            <h6 className="mt-3 text-white">Documentation</h6>
            <h6 className="mt-3 text-white">Guides</h6>
            <h6 className="mt-3 text-white">API status</h6>
          </div>
          <div>
            <h6 className="mt-3 font-bold">Company</h6>
            <h6 className="mt-1 text-white">About</h6>
            <h6 className="mt-3 text-white">Blog</h6>
            <h6 className="mt-3 text-white">Jobs</h6>
            <h6 className="mt-3 text-white">Press</h6>
            <h6 className="mt-3 text-white">Careers</h6>
          </div>
          <div>
            <h6 className="mt-3 font-bold">Legal</h6>
            <h6 className="mt-1 text-white">Claim</h6>
            <h6 className="mt-3 text-white">Policy</h6>
            <h6 className="mt-3 text-white">Terms</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
