import styles from "./layout.module.css";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">여성</a>
        <a href="">남성</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

export default ProductsLayout;
