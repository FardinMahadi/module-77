"use server";

import dbConnect from "@/lib/dbConnect";

const getProducts = async () => {
  try {
    const data = await dbConnect("test").find({}).toArray();
    return data;
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
};

export default getProducts;
