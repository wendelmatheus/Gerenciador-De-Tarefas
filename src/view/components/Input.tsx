namespace Input {
  export interface InputProps {
    children?: string;
    id?: string;
    cor?: string;
    placeholder?: string;
    tipo?: string;
    margem?: string;
    meuOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    meuChecked?: boolean;
  }
}

export default function Input({
  id,
  cor,
  placeholder,
  tipo,
  margem,
  meuOnChange,
  meuChecked,
  ...props
}: Input.InputProps) {
  return (
    <input
      id={id ? `${id}` : ""}
      type={tipo ? `${tipo}` : "text"}
      className={`w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 m-${margem} text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out`}
      placeholder={placeholder ? `${placeholder}` : ""}
      onChange={meuOnChange}
      checked={meuChecked}
    />
  );
}
