import { db } from "@/db";
import { communityPosts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const postId = Number(id);
    if (!Number.isFinite(postId)) {
      return Response.json({ error: "Invalid id" }, { status: 400 });
    }
    const [post] = await db
      .update(communityPosts)
      .set({ likes: sql`${communityPosts.likes} + 1` })
      .where(eq(communityPosts.id, postId))
      .returning();
    return Response.json({ post });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
