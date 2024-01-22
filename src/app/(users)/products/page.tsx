"use client";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useState } from "react";

const Toast = dynamic(() => import("@/components/components/toast"));
const Products = dynamic(
  () => import("@/components/pages/dashboard/products/products")
);
const ProductsPage = () => {
  const [toast, setToast] = useState({
    open: false,
    content: "",
    status: "success",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Script src="http://localhost:3000/products" strategy="worker" />
      <Products setToast={setToast} />
      <Toast
        toast={toast}
        onClose={() => setToast({ open: false, content: "", status: "" })}
      />
    </div>
  );
};

export default ProductsPage;
