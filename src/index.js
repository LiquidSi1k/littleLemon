import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DataProvider } from "./context/DataContext";
import BookingPage from "./pages/BookingPage";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<div className="center-all">Loading...</div>}>
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "booking",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BookingPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);

// Performance logging
reportWebVitals();
