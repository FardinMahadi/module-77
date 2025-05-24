"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postData) => {
  try {
    const result = await dbConnect("test").insertOne(postData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
