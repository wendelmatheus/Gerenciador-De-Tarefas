namespace Botao {
  export interface BotaoProps {
    children?: string;
    texto?: string;
  }
}

export default function Botao({ texto, ...props }: Botao.BotaoProps) {
  return (
    <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
      {texto}
    </button>
  );
}
