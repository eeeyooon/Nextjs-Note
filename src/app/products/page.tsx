import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;
// 3초마다 revalidate가 되도록 설정.

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여주도록 변경할 예정.

  // 만들어놓은 getProducts() 사용
  const products = await getProducts();

  return (
    <>
      <ul>
        <h1>제품 소개 페이지!</h1>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
