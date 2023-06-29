import Link from "next/link";

interface BotaoProps {
  children?: string;
  nomeBotao?: string;
  redirecionar?: string;
}

export default function Botao(props: BotaoProps) {
  return (
    <Link href={props.redirecionar || "/"}>
      <button className="bg-white rounded-lg text-blue-800 hover:bg-gray-100 text-lg px-4 py-2">
        {props.nomeBotao}
      </button>
    </Link>
  );
}
