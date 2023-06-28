import Botao from "./Botao";

export default function Menu() {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-10">
      <section className="items-center mx-auto max-w-4xl flex justify-between p-4">
        <h1 className="text-3xl font-medium">Tarefas</h1>
        <div>
          <nav className="space-x-8 text-xl" aria-label="main">
            <Botao></Botao>
          </nav>
        </div>
      </section>
    </header>
  );
}
