import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Register(req, res) {
  const { name, password, email } = req.body;

  try {
    const user = await prisma.user.create({ data: { name, password, email } });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}
