import path from "path";
import { promises as fs } from "fs";
// promises를 fs에서 가져올 건데 이를 fs라고 사용할 예정.

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // 여러 모듈에서 제품들의 정보를 사용하기 때문에 재사용가능한 함수로 만들어놓음.

  // 파일이 어디있는지 경로를 만들어줌.
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// 사용자가 특정 경로를 갔을 때, 그 slug === id를 전달해주면
// 그 제품을 찾아 제품에 대한 정보를 (제품의 객체를) 리턴해주는 함수.
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  // 모든 제품을 가져옴.

  return products.find((item) => item.id === id);
}
