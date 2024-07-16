import { Navigate, Route, Routes } from "react-router-dom";
import { App } from "./app";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<App />} />
      <Route path="/use-profile" element={<span>User Profile</span>} />
    </Routes>
  );
}
