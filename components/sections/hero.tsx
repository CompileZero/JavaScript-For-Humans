import React from "react";
import { Nav } from "./nav";
import { ProfileImage } from "../base/profile-image";

export const Hero: React.FC = () => (
  <section className="">
    <Nav />
    <div className="container ">
      <div className="flex flex-col my-16">
        <ProfileImage></ProfileImage>
        <h1 className="text-4xl text-left font-thin">JavaScript for Humans</h1>

        <p className="text-xl md:mr-64 md:text-left">
          A comprehensive guide to master JavaScript from Zero to Hero.
          Beginner, Intermediate and Advanced Concepts Explained.
        </p>
      </div>
    </div>
  </section>
);
