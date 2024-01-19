import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | undefined

export const usePrisma = () => {
    if (!prisma) {
        prisma = new PrismaClient()
    }

    return { client: prisma }
}