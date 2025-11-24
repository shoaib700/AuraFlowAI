// components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebarTitle">Dashboard</h2>

      <ul className="sidebarMenu">
        <li>
          <Link href="/deals">Deals</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/seo">SEO Tools</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/stats">Stats</Link>
        </li>
        <li>
          <Link href="/autopilot">Autopilot</Link>
        </li>
        <li>
          <Link href="/admin">Admin Panel</Link>
        </li>
      </ul>
    </aside>
  );
}
