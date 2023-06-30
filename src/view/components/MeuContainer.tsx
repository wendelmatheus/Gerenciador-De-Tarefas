namespace MeuContainer {
  export interface MeuContainerProps {
    children?: any;
    tituloContainer?: string;
    largura?: string;
    centralizarHorizontalmente?: boolean;
    centralizarVerticalmente?: boolean;
    preencherNaTela?: boolean;
  }
}

export default function MeuContainer({
  children,
  tituloContainer,
  largura,
  centralizarHorizontalmente,
  centralizarVerticalmente,
  preencherNaTela,
  ...props
}: MeuContainer.MeuContainerProps) {
  return (
    <div
      className={` ${preencherNaTela ? "h-screen w-screen" : ""}  flex ${
        centralizarHorizontalmente ? "justify-center" : ""
      } ${centralizarVerticalmente ? "items-center" : ""} bg-gray-100`}
    >
      <div className={`w-${largura}`}>
        <h1 className="text-lg font-bold text-center mb-4">
          {tituloContainer}
        </h1>
        <div className="bg-white shadow-md rounded-md p-6 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
