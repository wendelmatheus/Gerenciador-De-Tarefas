import Botao from "@/view/components/Botao";
import Input from "@/view/components/Input";
import Menu from "@/view/components/Menu";
import MeuLink from "@/view/components/MeuLink";
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
        <Input
          placeholder="Digite o nome da Tarefa"
          meuOnChange={(e) => setTarefa(e.target.value)}
          margem="4"
        ></Input>

        <Botao padding="2" bold bordaRedonda texto="Adicionar"></Botao>

        <MeuLink
          href="/"
          texto="Voltar"
          cor="blue-500"
          corHover="blue-700"
          tamanhoTexto="base"
          padding="2"
        ></MeuLink>
      </div>
    </div>
  );
}
