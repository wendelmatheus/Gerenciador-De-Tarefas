import { AppDataSource } from "@/db/controlador/conexaoBanco";
import { Tarefas } from "@/db/modelo/Tarefas";
import { NextApiRequest, NextApiResponse } from "next";

function verificarDados(title: string) {
  return (title ?? "") !== "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title } = req.body;

  const conexao = await AppDataSource;

  if (conexao) {
    if (verificarDados(title)) {
      const repositorio = conexao.getRepository(Tarefas);
      const salvar = repositorio.create({ title, completed: false });

      try {
        await repositorio.insert(salvar);
        //await repositorio.save(salvar);
        res.status(200).end();
      } catch (error) {
        res.status(500).end();
      }
    } else {
      res.status(400).end();
    }
  } else {
    res.status(500).end();
  }
}
