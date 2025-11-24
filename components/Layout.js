// components/Layout.js
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layoutWrapper">
      <Sidebar />
      <div className="mainContent">
        <Navbar />
        <div className="pageContent">{children}</div>
      </div>
    </div>
  );
}
