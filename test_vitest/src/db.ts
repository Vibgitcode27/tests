// Mocking is easy if the code that is being mocked is in seperate file

import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";
// for specific mocking
// export const prismaClient = new PrismaClient();

// deep mocking
export const prismaClient = mockDeep<PrismaClient>();
