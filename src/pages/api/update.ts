import { AppDataSource } from "@/db/controlador/conexaoBanco";
import { Tarefas } from "@/db/modelo/Tarefas";
import { NextApiRequest, NextApiResponse } from "next";

function transformarEmMinusculo(palavra: string) {
  return palavra.toLowerCase();
}

function verificarDados(id: string, completed: string) {
  const _completed = transformarEmMinusculo(completed);
  return (id ?? "") !== "" && (_completed == "false" || _completed == "true");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, completed } = req.body;
  const conexao = await AppDataSource;

  if (conexao) {
    if (verificarDados(id, completed)) {
      const completedMinusculo = transformarEmMinusculo(completed);

      const repositorio = conexao.getRepository(Tarefas);
      try {
        const _id = parseInt(id);
        const _completed = completedMinusculo === "true";

        console.log(typeof false);
        console.log("aqui -> " + completedMinusculo);

        try {
          await repositorio.save({ id: _id, completed: _completed });

          res.status(200).json({ mensagem: "OK" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Erro ao atualizar o item" });
        }
      } catch (error) {
        console.log("Erro -> ", error);
        throw error;
      }
    } else {
      res.status(400).end();
    }
  } else {
    res.status(500).end();
  }
}
