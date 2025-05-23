import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const p = await params;
  const singleData = await dbConnect("test").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

export async function DELETE(request, { params }) {
  const p = await params;
  const response = await dbConnect("test").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(response);
}

export async function PATCH(request, { params }) {
  const p = await params;
  const postedData = await request.json();
  const filter = { _id: new ObjectId(p.id) };
  const updateResponse = await dbConnect("test").updateOne(
    filter,
    { $set: { ...postedData } },
    { upsert: true }
  );

  return Response.json(updateResponse);
}
