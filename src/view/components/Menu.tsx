import Botao from "./Botao";

interface MenuProps {
  children?: string;
  titulo?: string;
  visibilidadeBotao?: boolean;
  tituloBotao?: string;
  redirecionarBotao?: string;
}

export default function Menu(props: MenuProps) {
  return (
    <header className="bg-blue-800 text-white sticky top-0 z-10">
      <section className="items-center mx-auto max-w-4xl flex justify-between p-4">
        <h1 className="text-3xl font-medium">{props.titulo}</h1>
        <div>
          <nav className="space-x-8 text-xl" aria-label="main">
            {props.visibilidadeBotao && (
              <Botao
                redirecionar={props.redirecionarBotao}
                nomeBotao={props.tituloBotao}
              ></Botao>
            )}
          </nav>
        </div>
      </section>
    </header>
  );
}
