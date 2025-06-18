import {PrismaClient } from '@prisma/client'

export const prisma = globalThis.prisma || new PrismaClient();

if(process.env.DATABASE_URL !== "production"){
    globalThis.prisma = prisma;
}