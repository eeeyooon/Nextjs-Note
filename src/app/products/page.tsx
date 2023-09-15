import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
