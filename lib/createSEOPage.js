import fs from "fs";
import path from "path";

export async function createSEOPage(keyword) {
  const fileName = keyword.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
  const dir = path.join(process.cwd(), "app", "seo");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const filePath = path.join(dir, fileName + ".jsx");

  const content = `
export const metadata = {
  title: "${keyword} | AuraFlow AI",
  description: "Latest information for ${keyword}",
};

export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">${keyword}</h1>
      <p className="mt-4">Automatically generated SEO page for keyword: ${keyword}</p>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, content);
  return `/seo/${fileName}`;
}
