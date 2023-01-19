import { DivResponse } from "../../styles/global";
import { TextResponseComponent } from "../TextResponse";

interface IntefaceDivResponseComponent {
  keys?: any;
  values?: any;
}

export function DivResponseComponent({
  keys,
  values,
}: IntefaceDivResponseComponent) {
  return (
    <DivResponse>
      <div id="divPai">
        <h2>VOCÊ RECEBERÁ:</h2>
        {keys &&
          keys.map(function (key: string, index: number) {
            if (key === "1") {
              return (
                <TextResponseComponent
                  title={"Amanhã: "}
                  value={values[index].toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                />
              );
            }
            return (
              <TextResponseComponent
                title={`Em ${key} dias: `}
                value={values[index].toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              />
            );
          })}
      </div>
    </DivResponse>
  );
}
