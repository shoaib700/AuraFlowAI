import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data);
    }
    load();
  }, []);

  return (
    <Layout>
      <h1 className="pageTitle">⚙️ System Settings</h1>

      <div className="settingsGrid">
        {Object.keys(settings).map((key) => (
          <div className="settingsItem" key={key}>
            <strong>{key}</strong>
            <span>{String(settings[key])}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
