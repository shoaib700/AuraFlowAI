import fs from "fs";
import path from "path";

export async function createAffiliatePage(product) {
  const fileName = product.title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
  const dir = path.join(process.cwd(), "app", "products");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const filePath = path.join(dir, fileName + ".jsx");

  const content = `
export const metadata = {
  title: "${product.title}",
  description: "Get ${product.title} at the best price."
};

export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">${product.title}</h1>
      <a href="${product.link}" className="text-blue-600 underline text-lg" target="_blank">
        Buy Now
      </a>
      <p className="mt-4">Automatically created affiliate page by AuraFlow AI.</p>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, content);
  return `/products/${fileName}`;
}
