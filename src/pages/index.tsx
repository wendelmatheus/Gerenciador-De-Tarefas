import Menu from "@/view/components/Menu";
import Head from "next/head";
import router from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [lista, setLista] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  const [checkedState, setCheckedState] = useState(new Array(lista.length));

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

  function handleClickRemover(id: number) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", `${id}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("/api/deletar", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          alert("Item removido com sucesso!");
          router.reload();
        } else if (response.status == 404) {
          alert("Item não encontrado ou já removido!");
        } else {
          alert("Algum erro inesperado aconteceu!");
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function handleClickUpdate(id: number, completed: boolean) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", `${id}`);
    urlencoded.append("completed", `${!completed}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("/api/update", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          router.reload();
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

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
        {lista.map((item, index) => (
          <div className="">
            <div className="bg-blue-400 text-white flex justify-between m-2 p-2">
              {item.title}
              <div className="flex flex-row">
                <input
                  id={`tarefa-id-${index}`}
                  type="checkbox"
                  onChange={() => handleClickUpdate(item.id, item.completed)}
                  checked={item.completed}
                  //onChange={() => handleOnChecked(index)}
                />
                <svg
                  onClick={() => handleClickRemover(item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  color="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
