"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFuc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email,
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("User created successfully");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-6">
      <div className="p-15 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Ragister your account
        </h2>
        <form
          className="space-y-4 mt-5"
          onSubmit={handleSubmit(handleRegisterFuc)}
        >
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">User Name</legend>
            <input
              type="name"
              className="input"
              placeholder="Enter your name"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
              {...register("photo", { required: "Photo url is required" })}
            />
            {errors.photo && (
              <span className="text-red-500">{errors.photo.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type= {isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-8 top-3"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FiEye className="text-2xl text-slate-400 cursor-pointer" />
              ) : (
                <FiEyeOff
                  className={`cursor-pointer text-2xl ${isShowPassword ? "text-slate-800" : "text-slate-400"}`}
                />
              )}
            </span>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn w-full text-white bg-slate-800">
            Register
          </button>
        </form>
        <p className="text-center text-slate-600 mt-4">
          Do you have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
