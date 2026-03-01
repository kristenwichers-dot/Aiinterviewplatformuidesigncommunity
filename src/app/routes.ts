import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/StudentDashboard";
import InterviewScreen from "./pages/InterviewScreen";
import ResumeUpload from "./pages/ResumeUpload";
import StudentReports from "./pages/StudentReports";
import StudentProfile from "./pages/StudentProfile";
import CompanyDashboard from "./pages/CompanyDashboard";
import CollegeVivaPanel from "./pages/CollegeVivaPanel";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/interview",
    Component: InterviewScreen,
  },
  {
    path: "/student/resume",
    Component: ResumeUpload,
  },
  {
    path: "/student/reports",
    Component: StudentReports,
  },
  {
    path: "/student/profile",
    Component: StudentProfile,
  },
  {
    path: "/company/dashboard",
    Component: CompanyDashboard,
  },
  {
    path: "/college/viva",
    Component: CollegeVivaPanel,
  },
]);
