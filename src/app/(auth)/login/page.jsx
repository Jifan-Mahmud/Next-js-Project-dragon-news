"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFuc = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-6">
      <div className="p-15 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>
        <form
          className="space-y-4 mt-5"
          onSubmit={handleSubmit(handleLoginFuc)}
        >
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
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-2 top-3"
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
          <button className="btn w-full text-white bg-slate-800">Login</button>
        </form>
        <p className="text-center text-slate-600 mt-4">
          Do not have an account?{" "}
          <Link href="/register" className="text-blue-500 underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
