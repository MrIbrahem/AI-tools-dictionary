import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
  descriptionAr: text("description_ar").notNull()
});

export const tools = pgTable("tools", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  descriptionAr: text("description_ar").notNull(),
  uses: text("uses").array().notNull(),
  usesAr: text("uses_ar").array().notNull(),
  url: text("url").notNull(),
  image: text("image").notNull()
});

export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export const insertToolSchema = createInsertSchema(tools).omit({ id: true });

export type Category = typeof categories.$inferSelect;
export type Tool = typeof tools.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type InsertTool = z.infer<typeof insertToolSchema>;
