import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import a from '@fastify/cors';

const port = process.env.PORT || 3000;

const server = fastify();
await server.register(a, {
    origin: 'http://localhost:5174', // Permite apenas requisições dessa origem
});
const prisma = new PrismaClient();

server.get("/", (req, res) => {
    return prisma.user.findMany()
});

server.post("/add", async (req, res) => {
    const { email, name } = req.body as { email: string, name: string };
    await prisma.user.create({
        data: {
            email,
            name,
        },
    });
});

server.listen({ port: 3000 }).then(() => {
    console.log('Server is running on port 3000');
});
