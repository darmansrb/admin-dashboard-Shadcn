import { Head, useForm } from '@inertiajs/react';
import React from 'react'
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";

const LoginPage = () => {

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.login.submit'));
  };

  return (
    <>
      <Head title="Login" />
      <div className="flex h-screen bg-background text-foreground">
        {/* Left Side */}
        <div className="w-1/3 bg-[#2e2f35] flex flex-col items-center justify-center p-8">
          <img
            src="/assets/logo/dthrees_logo.png"
            alt="Bank NTT Logo"
            className="mb-4 w-48 filter invert dark:invert-0 brightness-0 dark:brightness-100"
          />
        </div>

        {/* Right Side */}
        <div className="w-2/3 flex items-center justify-center bg-[#eceff4] dark:bg-[#1f1f1f]">
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-lg shadow-md w-full max-w-md"
          >
            <h2 className="text-3xl font-bold mb-4">Administration</h2>
            <p className="text-sm text-muted-foreground mb-6">Log in</p>

            {/* Email */}
            <div className="space-y-2 mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2 mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Button */}
            <Button type="submit" className="w-full" disabled={processing}>
              Log in
            </Button>

            {/* Forgot password */}
            <div className="mt-4 text-sm text-center">
              <a href="#" className="text-green-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
    // <div className="flex h-screen">
    //   {/* Left Side */}
    //   <div className="w-1/3 bg-[#2e2f35] text-white flex flex-col items-center justify-center p-8">
    //     <img
    //       src="/assets/logo/Bank-NTT-Logo-720p.png"
    //       alt="Bank NTT Logo"
    //       className="mb-4 w-48 filter invert brightness-0"
    //     />
    //     {/* <h1 className="text-4xl font-bold text-white">Bank NTT</h1> */}
    //   </div>

    //   {/* Right Side */}
    //   <div className="w-2/3 bg-[#eceff4] flex items-center justify-center">
    //     <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    //       <h2 className="text-3xl font-bold text-gray-800 mb-4">Administration</h2>
    //       <p className="text-sm text-gray-600 mb-6">Log in</p>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
    //         <input
    //           type="text"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="Enter your email"
    //           value={data.email}
    //           onChange={(e) => setData('email', e.target.value)}
    //         />
    //         {errors.email && <div className="text-red-600">{errors.email}</div>}
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
    //         <input
    //           type="password"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="Enter your password"
    //           value={data.password}
    //           onChange={(e) => setData('password', e.target.value)}
    //         />
    //         {errors.password && <div className="text-red-600">{errors.password}</div>}
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
    //         disabled={processing}
    //       >
    //         Log in
    //       </button>

    //       <div className="mt-4 text-sm">
    //         <a href="#" className="text-green-600 hover:underline">
    //           Forgot your password?
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default LoginPage