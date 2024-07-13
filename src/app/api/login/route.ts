import axios from "axios";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  try {
    const { data } = await axios.get(
      "http://localhost:3001/usuarios?email=" + email
    );

    if (data.length === 1) {
      if (data[0].senha === senha) {
        const objUser = data[0];
        delete objUser.senha;
        const token = jwt.sign(objUser, "token", { expiresIn: "1d" });

        return NextResponse.json({ token: token });
      }
    }
    return NextResponse.json(
      {
        message: "Dados incorretos",
      },
      { status: 401 }
    );
  } catch (erro) {
    return NextResponse.json({ message: "Erro Interno" }, { status: 500 });
  }
}
