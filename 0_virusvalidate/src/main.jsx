import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ValidationPage from "./pages/validation"
import AppointmentPage from "./pages/appointment"
import VisitorPage from "./pages/visitor"
import LocationPage from "./pages/location"
import ConditionsPage from "./pages/conditions"
import LoginPage from "./pages/login"
import SignupPage from "./pages/signup"
import GuestPage from "./pages/guest"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
	errorElement: <ErrorPage/>,
	children: [
	{
	  path: "validation",
	  element: <ValidationPage/>,
	},
	{ path: "appointment",
	element: <AppointmentPage/>,
	},
	{ path: "visitor",
	element: <VisitorPage/>,
	},
	{ path: "location",
	element: <LocationPage/>,
	},
	{ path: "conditions",
	element: <ConditionsPage/>,
	},
	{ path: "login",
	element: <LoginPage/>,
	},
	{ path: "signup",
	element: <SignupPage/>,
	},
	{ path: "guest",
	element: <GuestPage/>,
	},
	],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
