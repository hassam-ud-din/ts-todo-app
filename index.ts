import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// db connection tester
async function main() {
  const count = await prisma.user.count()
  console.log(count)
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
