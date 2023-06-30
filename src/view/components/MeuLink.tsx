namespace MeuLink {
  export interface MeuLinkProps {
    children?: string;
    texto?: string;
    href?: string;
    cor?: string;
  }
}

export default function MeuLink({
  texto,
  href,
  cor,
  ...props
}: MeuLink.MeuLinkProps) {
  return (
    <a className={`text-sm text-${cor} hover:underline`} href={`${href}`}>
      {texto}
    </a>
  );
}
