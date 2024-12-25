import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(req: any) {
    const newUser = await prisma.user.create({
        data: {
            email: req.email,
            name: req.name,
        },
    });
    console.log('Usuário criado:', newUser);
}

export default main;