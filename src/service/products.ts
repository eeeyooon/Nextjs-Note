export function getProducts() {
  // 여러 모듈에서 제품들의 정보를 사용하기 때문에 재사용가능한 함수로 만들어놓음.
  return ["shirt", "pants", "skirt", "shoes"];
}

// 사용자가 특정 경로를 갔을 때, 그 slug === id를 전달해주면
// 그 제품을 찾아 제품에 대한 정보를 (제품의 객체를) 리턴해주는 함수.
export function getProduct(id: string) {
  return "shirt";
}
