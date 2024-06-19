import { app } from "..";
import { describe, it, expect } from "@jest/globals";
import request from "supertest";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should check invalid input", async () => {
    const res = await request(app).post("/").send({
      a: 12,
      b: "123",
    });
    expect(res.statusCode).toBe(411);
    expect(res.body.error).toBe("invalid input types");
  });
});
