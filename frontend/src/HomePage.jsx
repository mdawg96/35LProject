import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function HomePage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handelCreateAccount = () => {
    navigate("/signup");
    console.log("signup");
  };
  return (
    <div style={{ marginLeft: "50px" }}>
      <div style={{ maxWidth: "60%" }}>
        <p className="titleFont">
          Build Strength, <br />
          Build Routine.
        </p>
        <p className="description">
          Momentum is committed to the idea that a healthy body makes a healthy
          mind. It’s hard to create a balanced workout schedule and commit to it
          in today’s busy society, so we make it easier by encouraging you to
          stick to your schedules and display your progress.
        </p>
        <div className="pt-10">
          <button className="button" onClick={handelCreateAccount}>
            Create Account
          </button>

          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
