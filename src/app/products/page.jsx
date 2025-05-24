// import dbConnect from "@/lib/dbConnect";
import getProducts from "../actions/products/getProducts";

// export const dynamic = "force-dynamic";

export default async function ProductPage() {
  // const res = await fetch(
  //   `https://first-next-app-fawn-xi.vercel.app/api/items`
  // );
  // const data = await res.json();

  const data = await getProducts();
  console.log(data);

  // if (data.length > 3) redirect("/");

  return (
    <ul className="text-center py-5">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
