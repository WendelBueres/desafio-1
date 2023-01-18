import { DivResponse } from "../../styles/global";
import { TextResponseComponent } from "../TextResponse";

interface IntefaceDivResponseComponent {
  firstDay: string;
  fifTeenthDay: string;
  thirtiethDay: string;
  ninetiethDay: string;
}

export function DivResponseComponent({
  firstDay,
  fifTeenthDay,
  thirtiethDay,
  ninetiethDay,
}: IntefaceDivResponseComponent) {
  return (
    <DivResponse>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>

        <TextResponseComponent title="Amanhã: " value={firstDay} />
        <TextResponseComponent title="Em 15 dias: " value={fifTeenthDay} />
        <TextResponseComponent title="Em 30 dias: " value={thirtiethDay} />
        <TextResponseComponent title="Em 90 dias: " value={ninetiethDay} />
      </div>
    </DivResponse>
  );
}
