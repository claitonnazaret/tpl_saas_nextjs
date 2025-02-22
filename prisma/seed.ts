import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Administrador Sistema',
    email: 'claitonnazaret@gmail.com',
    image: 'https://github.com/claitonnazaret.png',
    password: '$2a$12$uOlV7veyhWTnFJ0LLoY/Q.Z6rf9PcwFYALE83hw6UXHEX8hsSa8fy', //admin123
    userRoles: {
      create: [
        { role: { create: { name: 'admin' } } },
        { role: { create: { name: 'client' } } },
      ],
    },
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
