import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobDesk Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
            A JobDesk search platform is an online service designed to connect job seekers with potential employers. It provides a centralized place where individuals can search for job openings, submit applications, and upload resumes or portfolios.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
            Information about potential employers, including company profiles, employee reviews, and insights into company culture. This helps job seekers make informed decisions about where they want to work.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Create Account</p>
            <p>
            Community features such as forums, groups, and messaging tools that enable users to network with professionals in their field, seek advice, and share job leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
