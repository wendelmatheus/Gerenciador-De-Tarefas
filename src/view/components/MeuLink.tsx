namespace MeuLink {
  export interface MeuLinkProps {
    children?: string;
    texto?: string;
    href?: string;
    cor?: string;
    corHover?: string;
    tamanhoTexto?: string;
    padding?: string;
  }
}

export default function MeuLink({
  texto,
  href,
  cor,
  corHover,
  tamanhoTexto,
  padding,
  ...props
}: MeuLink.MeuLinkProps) {
  return (
    <a
      className={`text-${tamanhoTexto ? tamanhoTexto : "sm"} text-${cor} p-${
        padding ? padding : ""
      } hover:text-${corHover ? corHover : ""} text-decoration-line: underline`}
      href={`${href}`}
    >
      {texto}
    </a>
  );
}
