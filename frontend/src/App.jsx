import { Route, Routes } from "react-router-dom";
import Login from "./Account/Login";
import CreateAccount from "./Account/CreateAccount";
import HomePage from "./HomePage";
import CreateWorkout from "./Workout/CreateWorkout";
import Dashboard from "./Dashboard/Dashboard";
import Explore from "./Dashboard/Explore";
import ViewOtherUserPage from "./Account/ViewOtherUserPage";
import ViewWorkout from "./Workout/ViewWorkout";
import LogWorkout from "./Workout/LogWorkoutPage";
import ViewLoggedWorkout from "./Workout/ViewLoggedWorkout";
import NavBar from "./NavBar";
import ViewFriend from "./Friends/ViewFriend";
import FindFriends from "./Friends/FindFriends";
import LoggedWorkoutAnalytics from "./Workout/LoggedWorkoutAnalytics";
import UserGoals from "./Dashboard/userGoals";
import SpotifyCallback from "./Spotify/SpotifyCallback";
import SpotifyPlayer from "./Spotify/SpotifyPlayer";
import Schedule from "./Workout/Schedule";
import WorkoutPlanner from "./Workout/WorkoutPlanner";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/createworkout" element={<CreateWorkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/view-workout" element={<ViewWorkout />} />
        <Route path="/user/:userId" element={<ViewOtherUserPage />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/view-log-workout" element={<ViewLoggedWorkout />} />
        <Route path="/view-friend" element={<ViewFriend />} />
        <Route path="/find-friend" element={<FindFriends />} />
        <Route path="/logged-analytics" element={<LoggedWorkoutAnalytics />} />
        <Route path="/goals" element={<UserGoals />} />
        <Route path="/callback" element={<SpotifyCallback />} />
        <Route path="/spotify-player" element={<SpotifyPlayer />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/workout-planner" element={<WorkoutPlanner />} />
      </Routes>
    </>
  );
}

export default App;
