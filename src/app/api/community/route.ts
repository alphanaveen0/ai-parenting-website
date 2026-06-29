import { db } from "@/db";
import { communityPosts } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const posts = await db
      .select()
      .from(communityPosts)
      .orderBy(desc(communityPosts.createdAt))
      .limit(50);
    return Response.json({ posts });
  } catch {
    return Response.json({ posts: [] }, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const content = String(body?.content ?? "").trim();
    if (!content) {
      return Response.json({ error: "Content required" }, { status: 400 });
    }
    const isAnonymous = Boolean(body?.isAnonymous);
    const rawName = String(body?.authorName ?? "").trim();
    const authorName = isAnonymous ? "Anonymous" : rawName || "Parent";
    const category = String(body?.category ?? "सामान्य").slice(0, 80);

    const [post] = await db
      .insert(communityPosts)
      .values({
        authorName: authorName.slice(0, 120),
        isAnonymous,
        category,
        content: content.slice(0, 2000),
        isVerified: !isAnonymous,
      })
      .returning();

    return Response.json({ post });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
