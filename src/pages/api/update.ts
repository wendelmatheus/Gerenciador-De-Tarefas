import { AppDataSource } from "@/db/controlador/conexaoBanco";
import { Tarefas } from "@/db/modelo/Tarefas";
import { NextApiRequest, NextApiResponse } from "next";

function verificarDados(id: string, completed: string) {
  return (id ?? "") !== "" && (completed == "false" || completed == "true");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, completed } = req.body;
  const conexao = await AppDataSource;

  if (conexao) {
    if (verificarDados(id, completed)) {
      const repositorio = conexao.getRepository(Tarefas);
      const _id = Number(id);
      const _completed = Boolean(completed);

      console.log(typeof false);
      console.log(typeof _completed);

      try {
        await repositorio
          .createQueryBuilder()
          .update(Tarefas)
          .set({ completed: completed ?? "true" })
          .where("id = :id", { id: _id })
          .execute();

        res.status(200).json({ mensagem: "OK" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar o item" });
      }
    } else {
      res.status(400).end();
    }
  } else {
    res.status(500).end();
  }
}
