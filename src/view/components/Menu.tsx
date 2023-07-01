import Botao from "./Botao";

namespace Menu {
  export interface MenuProps {
    children?: string;
    titulo?: string;
    visibilidadeBotao?: boolean;
    textoBotao?: string;
    redirecionar?: string;
  }
}

export default function Menu({
  visibilidadeBotao,
  titulo,
  textoBotao,
  redirecionar,
  ...props
}: Menu.MenuProps) {
  return (
    <header className="bg-blue-800 text-white sticky top-0 z-10">
      <section className="items-center mx-auto max-w-4xl flex justify-between p-4">
        <h1 className="text-3xl font-medium">{titulo}</h1>
        <div>
          <nav className="space-x-8 text-xl" aria-label="main">
            {visibilidadeBotao && (
              <Botao
                redirecionar={`${redirecionar}`}
                texto={`${textoBotao}`}
              ></Botao>
            )}
          </nav>
        </div>
      </section>
    </header>
  );
}
