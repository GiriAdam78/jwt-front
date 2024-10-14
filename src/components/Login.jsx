import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://jwt-auth.test/api/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      setError("login Gagal", "periksa Kembali Email dan Password Anda");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-thight focus:outline-none focus:shadow-outline"
              placeholder="Email Yang Terdaftar"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tiight focus:outline-none focus:shadow-outline"
              placeholder="Massukan Password"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
            <p>Belum Punya Akun ? Silahkan Mendaftar <a href="/register" className="text-blue-400 hover:text-blue-500 font-sans">Register</a></p>

        </form>
      </div>
    </div>
  );
};

export default Login;
