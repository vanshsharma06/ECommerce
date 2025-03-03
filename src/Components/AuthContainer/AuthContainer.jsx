import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthPage = ({ isLogin, toggleAuth }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold mb-4">
          {isLogin ? "Login to your account" : "Register with a new account"}
        </h2>
        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded mb-3"
            />
          )}
          <input
            type="email"
            placeholder="Email Id"
            className="w-full p-3 border rounded mb-3"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded mb-3"
            />
            <button
              type="button"
              className="absolute right-3 top-4 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {isLogin && (
            <p className="text-sm text-gray-600 mb-3 cursor-pointer">
              Forgot Password?
            </p>
          )}
          <button className="w-full bg-red-500 text-white py-2 rounded mb-3">
            {isLogin ? "LOGIN" : "REGISTER"}
          </button>
          <p className="text-center text-sm text-gray-600 mb-3">
            {isLogin ? "Not Registered? " : "Already have an account? "}
            <span className="text-red-500 cursor-pointer" onClick={toggleAuth}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
          <p className="text-center text-gray-600 mb-3">
            Or continue with social account
          </p>
          <button className="w-full flex items-center justify-center border py-2 rounded">
            <FcGoogle className="mr-2" />{" "}
            {isLogin ? "LOGIN WITH GOOGLE" : "SIGN UP WITH GOOGLE"}
          </button>
        </form>
      </div>
    </div>
  );
};

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <AuthPage isLogin={isLogin} toggleAuth={() => setIsLogin(!isLogin)} />;
};

export default AuthContainer;
