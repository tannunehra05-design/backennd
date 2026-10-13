import * as z from "zod";

export const menuSchema = z.strictObject({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be at most 100 characters long"),
  price: z.coerce.number(),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters long")
    .max(250, "Description must be at most 250 characters long"),

  isAvailable: z.boolean().default(true),
  category: z
    .string()
    .refine(
      (value) =>
        ["All", "breakfast", "lunch", "dinner", "snacks", "beverages"].includes(
          value,
        ),
      {
        message: "{VALUE} is not supported",
      },
    ),
  image: z.array(z.string()).default([]),
});
