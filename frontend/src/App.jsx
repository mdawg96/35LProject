import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Account/Login";
import CreateAccount from "./Account/CreateAccount";
import HomePage from "./HomePage";
import CreateWorkout from "./Workout/CreateWorkout";
import Dashboard from "./Dashboard/Dashboard";
import Explore from "./Dashboard/Explore";
import UserProfile from "./Account/UserProfile";
import LoggedWorkoutPage from "./Workout/LoggedWorkoutPage";
import ViewOtherUserPage from "./Account/ViewOtherUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/createworkout" element={<CreateWorkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/logged-workouts" element={<LoggedWorkoutPage />} />
      <Route path="/user/:userId" element={<ViewOtherUserPage />} />
    </Routes>
  );
}

export default App;
