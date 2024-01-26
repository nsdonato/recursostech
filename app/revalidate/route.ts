import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath("/", "layout")
  return Response.json({revalidated: true})
}