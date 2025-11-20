import { NextResponse } from "next/server";
import createAffiliatePage from '@/lib/createAffiliatePage';
import getBaseUrl from '@/lib/getBaseUrl';

export async function GET() {
  const products = [
    {
      title: "Best Wireless Earbuds 2025",
      link: "https://amazon.com/...?tag=yourtag"
    },
    {
      title: "Smart Fitness Watch Pro",
      link: "https://amazon.com/...?tag=yourtag"
    }
  ];

  const pages = [];
  for (const product of products) {
    const url = await createAffiliatePage(product);
    pages.push(url);
  }

  return NextResponse.json({
    success: true,
    message: "Affiliate pages created",
    pages
  });
}
