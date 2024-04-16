import { PrismaClient } from "@prisma/client";

//Cada query ao BD, irá gerar um log
export const prisma = new PrismaClient({
  log:['query']
})