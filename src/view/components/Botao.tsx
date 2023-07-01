import router from "next/router";

namespace Botao {
  export interface BotaoProps {
    children?: string;
    texto?: string;
    redirecionar?: string;
    cor?: string;
    corHover?: string;
    corTexto?: string;
    bold?: boolean;
    bordaRedonda?: boolean;
    preencherLargura?: boolean;
    padding?: string;
    meuOnClick?: () => void;
  }
}

export default function Botao({
  redirecionar,
  texto,
  cor,
  corHover,
  corTexto,
  bold,
  bordaRedonda,
  preencherLargura,
  padding,
  ...props
}: Botao.BotaoProps) {
  return (
    <button
      onClick={() => {
        redirecionar ? router.push(`${redirecionar}`) : "";
      }}
      className={`${preencherLargura ? "w-full" : ""} text-sm bg-${
        cor ? cor : "blue-500"
      } hover:bg-${corHover ? corHover : "blue-700"} text-${
        corTexto ? corTexto : "white"
      } ${bold ? "font-bold" : ""} px-6 py-2 ${
        bordaRedonda ? "rounded-full" : "rounded"
      } shadow}`}
    >
      {texto}
    </button>
  );
}
