import { AppDataSource } from "@/db/controlador/conexaoBanco";
import { Tarefas } from "@/db/modelo/Tarefas";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const conexao = await AppDataSource;

  if (conexao) {
    const repositorio = conexao.getRepository(Tarefas);
    const repo = await repositorio.find();

    //res.status(202).end();
    res.status(200).json(repo);
  } else {
    res.status(500).end();
  }
}
