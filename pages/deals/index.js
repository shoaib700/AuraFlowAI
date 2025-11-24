import Layout from "@/components/Layout";
import AdSenseBlock from "@/components/AdSenseBlock";
import { useEffect, useState } from "react";

export default function Deals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/deals");
      const data = await res.json();
      setItems(data.items || []);
    }
    load();
  }, []);

  return (
    <Layout>
      <h1 className="pageTitle">🔥 Deals & Discounts</h1>
      <AdSenseBlock slot="876543210" />

      <div className="gridCards">
        {items.map((deal) => (
          <div className="card" key={deal._id}>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            {deal.link && (
              <a href={deal.link} target="_blank" className="primaryBtn">
                View Deal →
              </a>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
