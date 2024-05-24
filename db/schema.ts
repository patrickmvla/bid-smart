import { pgTable, serial } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const bids = pgTable("bids", {
  id: serial("id").primaryKey(),
});

export const insertBidsSchema = createInsertSchema(bids);
