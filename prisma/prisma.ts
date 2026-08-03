import { PrismaClient } from '@prisma/client'

const globalFormPrisma = global as unknown as { prisma: PrismaClient }

export const prismaClient = globalFormPrisma.prisma || new PrismaClient()

globalFormPrisma.prisma = prismaClient