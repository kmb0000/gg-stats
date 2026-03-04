import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  { path: "/", element: <ProfilePage /> },
]);
