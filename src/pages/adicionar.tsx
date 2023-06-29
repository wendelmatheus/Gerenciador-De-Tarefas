import Menu from "@/view/components/Menu";
import Head from "next/head";
import router from "next/router";
import { useState } from "react";

export default function Adicionar() {
  const [tarefa, setTarefa] = useState("");

  function enviarParaAPIAdicionar(tarefa: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", tarefa);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("/api/cadastrar", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          alert("Tarefa adicionada com sucesso");
          router.push("/");
        } else {
          alert("Ocorreu algum erro");
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function handleClickAdicionar() {
    enviarParaAPIAdicionar(tarefa);
  }

  return (
    <div>
      <Head>
        <title>Adicionar Tarefa</title>
      </Head>
      <Menu titulo="Adicionar Tarefa"></Menu>
      <div className="items-center mx-auto max-w-4xl flex flex-col">
        <input
          onChange={(e) => setTarefa(e.target.value)}
          type="text"
          placeholder="Digite o nome da Tarefa..."
          className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 m-4 text-base text-gray-800 placeholder-gray-300 focus:outline-none"
        />
        <button
          onClick={handleClickAdicionar}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full"
        >
          Adicionar
        </button>
        <a
          className="text-blue-500 hover:text-blue-700 text-decoration-line: underline"
          href="/"
        >
          Voltar
        </a>
      </div>
    </div>
  );
}
