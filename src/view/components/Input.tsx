namespace Input {
  export interface InputProps {
    children?: string;
    id?: string;
    cor?: string;
    placeholder?: string;
    tipo?: string;
  }
}

export default function Input({
  id,
  cor,
  placeholder,
  tipo,
  ...props
}: Input.InputProps) {
  return (
    <input
      id={id ? `${id}` : ""}
      type={tipo ? `${tipo}` : "text"}
      className={`w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out`}
      placeholder={placeholder ? `${placeholder}` : ""}
    />
  );
}
