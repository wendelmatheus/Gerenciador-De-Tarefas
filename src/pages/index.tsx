import Menu from "@/view/components/Menu";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [lista, setLista] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    //var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: "GET",
      //body: urlencoded,
    };

    fetch("/api/consultar", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((result) => {
        const tarefas: [] = result.repo;
        setLista(tarefas);
      })
      .catch((error) => console.log("error", error));
    //console.log(lista);
  }, []);

  return (
    <div>
      <Head>
        <title>Tarefas</title>
      </Head>
      <Menu
        visibilidadeBotao
        titulo="Tarefas"
        tituloBotao="Adicionar"
        redirecionarBotao="/adicionar"
      ></Menu>
      <div className="items-center mx-auto max-w-4xl">
        {lista.map((item) => (
          <div className="">
            <div className="bg-blue-400 text-white flex justify-between m-2 p-2">
              {item.title}
              <input type="checkbox" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
