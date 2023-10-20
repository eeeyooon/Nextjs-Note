import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여주도록 변경할 것.
  return <h1>{params.slug} 제품 설명</h1>;
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어둘 수 있게 해줄 거임. (SSG)
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
