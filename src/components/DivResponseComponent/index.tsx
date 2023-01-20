import { DivResponse } from "../../styles/global";
import { TextResponseComponent } from "../TextResponseComponent";

// Interface (tipagem) das props.children de DivResponseComponent
interface IDivResponseComponent {
  keys: string[];
  values: number[];
}

export function DivResponseComponent({ keys, values }: IDivResponseComponent) {
  return (
    <DivResponse>
      <div id="divPai">
        <h2>VOCÊ RECEBERÁ:</h2>
        {/* renderização do response da API */}
        {keys &&
          keys.map(function (key: string, index: number) {
            // Se key for 1, o title será "Amanhã: "
            if (key === "1") {
              return (
                <TextResponseComponent
                  title={"Amanhã: "}
                  //pega valor do response por meio do index e formata para moeda BRL(Real)
                  value={values[index].toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                />
              );
            }
            return (
              <TextResponseComponent
                // Se key for diferente de 1, o title será "Em ${key} dias: "
                title={`Em ${key} dias: `}
                //pega valor do response por meio do index e formata para moeda BRL(Real)
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
