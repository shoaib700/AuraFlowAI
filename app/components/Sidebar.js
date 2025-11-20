import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-gray-100 h-screen p-5 space-y-6">
      <h2 className="text-2xl font-bold">Menu</h2>

      <nav className="flex flex-col space-y-3">
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/admin" className="hover:text-blue-400">
          Admin Panel
        </Link>
        <Link
          href="/admin-login"
          className="hover:text-blue-400 text-xs pt-3 border-t border-gray-700"
        >
          Admin Login
        </Link>
      </nav>
    </aside>
  );
}
