"use client";

import React from "react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (err) {
      console.error("Form Error: ", err);
    } finally {
      setFormData(defaultFormData);
    }
  };

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none";

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            |<FcGoogle className="text-4xl ml-3 cursor-pointer" />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@doe.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            id="name"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
          <button className="text-blue-700 underline">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
