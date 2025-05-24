"use client";

import { postSingleData } from "@/app/actions/products/postProducts";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    // const res = await fetch(
    //   "https://first-next-app-fawn-xi.vercel.app/api/items",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const result = await res.json();
    const result = await postSingleData(payload);

    console.log(result);
    form.reset();
    router.push("/products");
  };

  return (
    <div className="flex justify-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-gray-700 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">
          Add New Product
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
