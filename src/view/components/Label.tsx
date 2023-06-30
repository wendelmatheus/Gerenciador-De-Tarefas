namespace Label {
  export interface LabelProps {
    children?: string;
    texto?: string;
    cor?: string;
    htmlFor?: string;
  }
}

export default function Label({
  texto,
  cor,
  htmlFor,
  ...props
}: Label.LabelProps) {
  return (
    <label className={`block text-sm text-${cor} mb-1`} htmlFor={`${htmlFor}`}>
      {texto}
    </label>
  );
}
