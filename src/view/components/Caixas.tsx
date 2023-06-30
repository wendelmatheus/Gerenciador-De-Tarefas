export default function CaixaLogin() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-80">
        <h1 className="text-lg font-bold text-center mb-4">Login</h1>

        <div className="bg-white shadow-md rounded-md p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="text"
              placeholder="Digite seu email..."
            />
          </div>
          <div>
            <label
              className="block text-sm text-gray-800 mb-1"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              id="password"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="password"
              placeholder="Digite sua senha..."
            />
          </div>
          <div className="text-right">
            <a
              href="/cadastro"
              className="text-sm text-gray-500 hover:underline"
            >
              Cadastre-se
            </a>
          </div>

          <div>
            <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaixaCadastro() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-80">
        <h1 className="text-lg font-bold text-center mb-4">Login</h1>

        <div className="bg-white shadow-md rounded-md p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="text"
              placeholder="Digite seu nome..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="text"
              placeholder="Digite seu email..."
            />
          </div>

          <div>
            <label
              className="block text-sm text-gray-800 mb-1"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              id="password"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="password"
              placeholder="Digite sua senha..."
            />
          </div>

          <div>
            <label
              className="block text-sm text-gray-800 mb-1"
              htmlFor="confirmPassword"
            >
              Confirme sua Senha
            </label>
            <input
              id="confirmPassword"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              type="password"
              placeholder="Confirme sua senha..."
            />
          </div>

          <div className="text-right">
            <a href="/login" className="text-sm text-gray-500 hover:underline">
              Voltar ao Login
            </a>
          </div>

          <div>
            <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
              Cadastrar-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
