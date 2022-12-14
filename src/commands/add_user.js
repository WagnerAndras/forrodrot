// Run: npm run adduser "Teszt Név" "teszt@nev.hu" "123456"

const { PrismaClient } = require("@prisma/client");
const crypto = require("crypto");

const prisma = new PrismaClient();

addUser();

async function addUser() {
  const name = process.argv[2];
  const email = process.argv[3];
  const password = process.argv[4];

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });

    if (!user) throw Error("Error: User not created");

    console.log("Added user with email:", user.email);
  } catch (err) {
    console.log("Error: ", err);
  }
}
