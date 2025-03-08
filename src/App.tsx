import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Stores } from "./components/Stores";
import SKU from "./components/SKU";
import Planning from "./components/Planning";
import Chart from "./components/Chart";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";

export default function App() {
  return (
    <>
      <ClerkLoading>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <Header />
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Stores />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sku"
              element={
                <ProtectedRoute>
                  <SKU />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planning"
              element={
                <ProtectedRoute>
                  <Planning />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chart"
              element={
                <ProtectedRoute>
                  <Chart />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </ClerkLoaded>
    </>
  );
}
