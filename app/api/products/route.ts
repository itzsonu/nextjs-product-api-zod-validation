import { NextResponse } from "next/server";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be positive"),
});

export async function POST(request: Request) {
  let body;

  // Step 1: Parse JSON safely
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        error: "Malformed JSON",
        message: "Request body contains invalid JSON",
      },
      { status: 400 }
    );
  }

  // Step 2: Validate data using Zod
  const result = productSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: result.error.issues,
      },
      { status: 400 }
    );
  }

  // Step 3: Return success response
  return NextResponse.json(
    {
      message: "Product created successfully",
      product: result.data,
    },
    { status: 201 }
  );
}