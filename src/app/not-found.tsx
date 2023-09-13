import React from "react";
import Link from "next/link";

function notFoundPage() {
  return (
    <div>
      <h2>Not Found 🤐</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default notFoundPage;
