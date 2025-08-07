// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="flex pt-24 flex-col justify-center font-[sans-serif] sm:h-screen p-4">
//       <div className="max-w-xl w-full mx-auto border border-gray-300 rounded-2xl p-12"> {/* Increased width and padding */}
//         <div className="text-[#A1252E] text-center mb-12 text-4xl">
//           <strong>Login</strong>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-6">
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 <strong>Email</strong>
//               </label>
//               <input
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
//                 type="email"
//                 value={data.email}
//                 placeholder="Enter Email"
//                 name="email"
//                 required
//                 onChange={handleOnChange}
//               />
//             </div>
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 <strong>Password</strong>
//               </label>
//               <input
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#A1252E]"
//                 type="password"
//                 value={data.password}
//                 placeholder="Enter Password"
//                 name="password"
//                 required
//                 onChange={handleOnChange}
//               />
//             </div>
//           </div>

//           <div className="mt-12">
//             <button className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-[#A1252E] hover:bg-[#8F2134] focus:outline-none">
//               Login
//             </button>
//           </div>

//           <p className="text-gray-800 text-sm mt-6 text-center">
//             Don't have an account?{" "}
//             <Link
//               to={"/signup"}
//               className="text-[#A1252E] hover:text-[#8F2134]  font-semibold hover:underline ml-1"
//             >
//               Register here
//             </Link>
//           </p>

//           <div className="mt-8 text-center">
//             <span className="text-sm text-gray-800">or sign in with</span>
//             {/* Added responsive classes for mobile layout */}
//             <div className="mt-4 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center">
//               <button className="py-2 px-4 text-white bg-[#DB4437] rounded-md w-full sm:w-auto">
//                 Google
//               </button>
//               <button className="py-2 px-4 text-white bg-[#3b5998] rounded-md w-full sm:w-auto">
//                 Facebook
//               </button>
//               <button className="py-2 px-4 text-white bg-[#0061F2] rounded-md w-full sm:w-auto">
//                 Microsoft
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn, signInWithRedirect } from 'aws-amplify/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn({ username: email, password });
      toast.success('Successfully logged in!');
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error(error.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithRedirect({ provider });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      toast.error(`Failed to login with ${provider}. Please try again.`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#A1252E] focus:ring focus:ring-[#A1252E] focus:ring-opacity-50 py-2 px-3"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#A1252E] focus:ring focus:ring-[#A1252E] focus:ring-opacity-50 py-2 px-3"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#A1252E] focus:ring-[#A1252E] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm text-[#A1252E] hover:underline">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A1252E] hover:bg-[#731B22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A1252E]"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button 
                type="button" 
                onClick={() => handleSocialLogin('Google')}
                className="py-2 px-4 text-white bg-red-600 rounded-md w-full sm:w-auto hover:bg-red-700"
              >
                Google
              </button>
              <button 
                type="button" 
                onClick={() => handleSocialLogin('Facebook')}
                className="py-2 px-4 text-white bg-[#3b5998] rounded-md w-full sm:w-auto hover:bg-[#2d4373]"
              >
                Facebook
              </button>
              <button 
                type="button" 
                onClick={() => handleSocialLogin('Microsoft')}
                className="py-2 px-4 text-white bg-[#0061F2] rounded-md w-full sm:w-auto hover:bg-[#0050c9]"
              >
                Microsoft
              </button>
            </div>
          </div>
        </form>
        
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#A1252E] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;