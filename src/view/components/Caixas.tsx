import Botao from "./Botao";
import Input from "./Input";
import Label from "./Label";
import MeuContainer from "./MeuContainer";
import MeuLink from "./MeuLink";

export default function CaixaLogin() {
  return (
    <MeuContainer
      tituloContainer="Login"
      largura="80"
      preencherNaTela
      centralizarVerticalmente
      centralizarHorizontalmente
    >
      <div>
        <Label texto="Email" cor="gray-800" htmlFor="email"></Label>
        <Input placeholder="Digite seu email..." id="email"></Input>
      </div>

      <div>
        <Label texto="Senha" cor="gray-800" htmlFor="password"></Label>
        <Input
          id="password"
          tipo="password"
          placeholder="Digite sua Senha..."
        ></Input>
      </div>

      <div className="text-right">
        <MeuLink texto="Cadastre-se" href="/cadastro" cor="blue-500" />
      </div>

      <div>
        <Botao texto="Login"></Botao>
      </div>
    </MeuContainer>
  );
}

export function CaixaCadastro() {
  return (
    <MeuContainer
      tituloContainer="Olá!"
      largura="80"
      preencherNaTela
      centralizarHorizontalmente
      centralizarVerticalmente
    >
      <div>
        <Label texto="Nome" htmlFor="nome" cor="gray-800"></Label>
        <Input placeholder="Digite seu nome..." id="nome"></Input>
      </div>

      <div>
        <Label texto="Email" htmlFor="email" cor="gray-800"></Label>
        <Input placeholder="Digite seu email..." id="email"></Input>
      </div>

      <div>
        <Label texto="Senha" htmlFor="senha" cor="gray-800"></Label>
        <Input placeholder="Digite sua senha..." id="senha"></Input>
      </div>

      <div>
        <Label
          texto="Confirme sua Senha"
          htmlFor="confirmeSuaSenha"
          cor="gray-800"
        ></Label>
        <Input
          placeholder="Confirme sua senha..."
          id="confirmeSuaSenha"
        ></Input>
      </div>

      <div className="text-right">
        <MeuLink texto="Voltar ao Login" href="/login" cor="blue-500"></MeuLink>
      </div>

      <div>
        <Botao texto="Cadastre-se"></Botao>
      </div>
    </MeuContainer>
  );
}
