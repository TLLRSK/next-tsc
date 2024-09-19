import Link from "next/link";
import React from "react";

function InfoPage() {
  return (
    <div>
      <h1 className="text-7xl">InfoPage</h1>
      <Link
        href="/info/contact"
        className="text-xl text-blue-500 inline-block mt-8"
      >
        Contact
      </Link>
    </div>
  );
}

export default InfoPage;
