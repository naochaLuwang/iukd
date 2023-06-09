import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// create a new prisma client instance or use the existing global instance
const client = globalThis.prisma || new PrismaClient();

// if the current environment is not in production, assign the the client to the global prisma variable.

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
