import express from "express";
import z from "zod";
export const app = express();

// can add zod here

app.use(express.json());

const reqSchema = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/", (req, res) => {
  const parseSafe = reqSchema.safeParse(req.body);
  if (!parseSafe.success) {
    return res.status(411).json({ error: "invalid input types" });
  }

  const answer = parseSafe.data.a + parseSafe.data.b;
  res.json({ answer });
});

// app.listen(3000, () => {
//   console.log("Running");
// });
