import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Administrador Sistema',
    email: 'claitonnazaret@gmail.com',
    image: 'https://github.com/claitonnazaret.png',
    password: '$2a$12$uOlV7veyhWTnFJ0LLoY/Q.Z6rf9PcwFYALE83hw6UXHEX8hsSa8fy',
    userRoles: {
      create: [
        { role: { create: { name: 'admin' } } },
        { role: { create: { name: 'client' } } },
      ],
    }, // admin123
  },
  {
    name: 'Cliente Sistema',
    email: 'client123@gmail.com',
    image: 'https://jsonplaceholder.typicode.com/mockend.svg',
    password: '$2a$12$uL3Mpl//FH.AzzReLhZISu3.90aR4ruaqVaX6dYdW8Ho8dwHZnrE6',
    userRoles: { create: { role: { connect: { name: 'client' } } } }, // client123
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
