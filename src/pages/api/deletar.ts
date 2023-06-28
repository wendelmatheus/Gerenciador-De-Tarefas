import { AppDataSource } from "@/db/controlador/conexaoBanco";
import { Tarefas } from "@/db/modelo/Tarefas";
import { NextApiRequest, NextApiResponse } from "next";

function verificarDados(id: string) {
  return (id ?? "") !== "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  const conexao = await AppDataSource;

  if (conexao) {
    if (verificarDados(id)) {
      const repositorio = conexao.getRepository(Tarefas);
      const item = await repositorio.findOneBy({ id: id });

      if (item) {
        await repositorio.delete(item);
        res.status(200).end();
      } else {
        console.log("Item não encontrado");
        res.status(404).end();
      }
    } else {
      res.status(400).end();
    }

    res.status(202).end();
  } else {
    res.status(500).end();
  }
}
