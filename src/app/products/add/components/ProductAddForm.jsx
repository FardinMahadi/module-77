"use client";

export default function ProductAddForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
    form.reset();
    alert("Product added");
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="bg-white px-4 py-2 my-5"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
