import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Stores } from "./components/Stores";
import SKU from "./components/SKU";
import Planning from "./components/Planning";
import Chart from "./components/Chart";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Stores />} />
          <Route path="/sku" element={<SKU />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Layout>
    </>
  );
}
