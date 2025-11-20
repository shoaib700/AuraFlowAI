import fs from "fs";
import path from "path";

export default async function createSEOPage(pageName, title, description) {
  if (!pageName || !title) return null;

  const safeName = pageName.toLowerCase().replace(/\s+/g, "-");
  const folder = path.join(process.cwd(), "app", "seo", safeName);
  const file = path.join(folder, "page.js");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const content = `
export const metadata = {
  title: "${title}",
  description: "${description}"
};

export default function Page() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  );
}
`;

  fs.writeFileSync(file, content, "utf8");

  return `/seo/${safeName}`;
}
