import Menu from "@/view/components/Menu";
import { useEffect, useState } from "react";

export default function Home() {
  const [lista, setLista] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    var urlencoded = new URLSearchParams();

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
        const aux = result;
        console.log(aux);
      })
      .catch((error) => console.log("error", error));
    console.log(lista);
  }, []);

  return (
    <div>
      <Menu></Menu>
    </div>
  );
}
