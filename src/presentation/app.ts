// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// // db connection tester
// async function main() {
//   const count = await prisma.user.count()
//   console.log(count)
// }

// main()
//   .catch(e => {
//     console.error(e.message)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = 5000 || process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`))
