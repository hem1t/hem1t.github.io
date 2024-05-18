import React from "react";
import ProfilePic from "../assests/cat_pfp.jpg";
import "./Profile.css";
import LinkedInIcon from "../assests/linkedin.svg";
import GithubIcon from "../assests/github.svg";
import LeetcodeIcon from "../assests/leetcode.svg";
import { ReactSVG } from "react-svg";

function LinkedIcon({ icon, link }) {
  return (
    <a className="linked-icon-link" href={link}>
      <ReactSVG className="svg-icons" src={icon} />
    </a>
  );
}

export default function Profile() {
  return (
    <section className="profile">
      <img
        className="profile-image"
        src={ProfilePic}
        alt="A cat licking itself!"
      ></img>
      <div className="profile-about-box">
        <span>about</span>
        <h3>Hem1t</h3>
        <p>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </div>
      <div className="contacts">
        <LinkedIcon
          icon={LinkedInIcon}
          link="https://www.linkedin.com/in/hem1t/"
        />
        <LinkedIcon icon={GithubIcon} link="https://github.com/hem1t" />
        <LinkedIcon icon={LeetcodeIcon} link="https://leetcode.com/u/hem1t/" />
      </div>
    </section>
  );
}
