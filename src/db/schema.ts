import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const communityPosts = pgTable("community_posts", {
  id: serial("id").primaryKey(),
  authorName: varchar("author_name", { length: 120 }).notNull(),
  isAnonymous: boolean("is_anonymous").default(false).notNull(),
  isExpert: boolean("is_expert").default(false).notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
  category: varchar("category", { length: 80 }).default("सामान्य").notNull(),
  content: text("content").notNull(),
  likes: integer("likes").default(0).notNull(),
  replyCount: integer("reply_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const communityReplies = pgTable("community_replies", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").notNull(),
  authorName: varchar("author_name", { length: 120 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
