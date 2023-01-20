import { TextResponse } from "../../styles/global";

// Interface (tipagem) das props.children de TextResponseComponent
interface ITextResponseComponent {
  title: string;
  value: string | number;
}

export function TextResponseComponent({
  title,
  value,
}: ITextResponseComponent) {
  return (
    <TextResponse>
      <p>{title}</p>
      <span>{value}</span>
    </TextResponse>
  );
}
