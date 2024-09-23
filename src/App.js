import "./styles/global.css";
import "./styles/components.css";
import "./styles/mediaQueries.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
