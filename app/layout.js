import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "AuraFlow AI",
  description: "AI Autopilot Engine for earnings & automation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 text-gray-900">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
