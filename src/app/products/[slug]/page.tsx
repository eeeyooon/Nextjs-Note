import { getProduct, getProducts } from "@/service/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = params;
  const product = await getProduct(slug);

  return {
    title: `Wonderful Items | ${product?.name.toUpperCase()}`,
    description: `Check our wonderful ${product?.name}!`,
  };
};

// prams.slug만 사용중이기 때문에 params를 구조분해할당해서 slug만 뽑음.
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여주도록 변경할 것.
  return <h1>{product.name} 제품 설명</h1>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어둘 수 있게 해줄 거임. (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
