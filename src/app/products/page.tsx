import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

// 메모리상에 존재하는 정적 데이터
const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여주도록 변경할 예정.
  return (
    <>
      <ul className={styles.ul}>
        <h1>제품 소개 페이지!</h1>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
