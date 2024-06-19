// Mocking is easy if the code that is being mocked is in seperate file

import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();
