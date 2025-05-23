export default async function ProductPage() {
  const res = await fetch(`http://localhost:3000/api/items`, {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <ul className="text-center py-5">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
