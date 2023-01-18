import { TextResponse } from "../../styles/global";

interface InterfaceTextResponseComponent {
  title: string;
  value: string | number;
}

export function TextResponseComponent({
  title,
  value,
}: InterfaceTextResponseComponent) {
  return (
    <TextResponse>
      <p>{title}</p>
      <span>{value}</span>
    </TextResponse>
  );
}
