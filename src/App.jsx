import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./App.css";
import { Register } from "./Pages/Register";
import { Table } from "./Pages/Table";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Register />,
        },
        {
          path: "table",
          element: <Table users={users} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
