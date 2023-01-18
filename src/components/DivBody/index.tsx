import axios from "axios";
import { useEffect, useState } from "react";
import { DivCard } from "../../styles/global";
import { DivRequestComponent } from "../DivRequest";
import { DivResponseComponent } from "../DivResponse";

export function DivBody() {
  const [currency, setCurrency] = useState<string | number>(0);
  const [parcel, setParcel] = useState(1);
  const [percentage, setPercentage] = useState<string | number>(0);
  const [firstDay, setFirstDay] = useState<string>("R$ 0,00");
  const [fifTeenthDay, setFifTeenthDay] = useState<string>("R$ 0,00");
  const [thirtiethDay, setThirtiethDay] = useState<string>("R$ 0,00");
  const [ninetiethDay, setNinetiethDay] = useState<string>("R$ 0,00");

  useEffect(() => {
    getResponse();
  }, [currency, parcel, percentage]);

  function limpResponse() {
    setFirstDay("R$ 0,00");
    setFifTeenthDay("R$ 0,00");
    setThirtiethDay("R$ 0,00");
    setNinetiethDay("R$ 0,00");
  }

  function limpCurrency(e: any) {
    e.target.type = "number";
    e.target.min = 0;
    e.target.max = 100000000;
    e.target.value = "";
    return setCurrency(e.target.value);
  }

  function handleCurrency(e: any) {
    return setCurrency(e.target.value);
  }

  async function formatCurrency(e: any) {
    if (currency < 1000) {
      e.target.value = 0;
      limpResponse();
    }

    if (currency > 100000000) {
      e.target.value = 0;
      limpResponse();
    }

    e.target.type = "text";
    let valueCapture = parseFloat(e.target.value);
    let valueFormat = valueCapture.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setCurrency(valueFormat);
  }

  function handleParcel(e: any) {
    return setParcel(e.target.value);
  }

  async function checkParcel(e: any) {
    if (parcel > 12) {
      setParcel(0);
      limpResponse();
    }
    if (parcel < 1) {
      setParcel(0);
      limpResponse();
    }
  }

  function limpPercentage(e: any) {
    e.target.type = "number";
    e.target.min = 1;
    e.target.max = 100;
    e.target.value = "";
    return setPercentage(e.target.value);
  }

  function handlePercetage(e: any) {
    return setPercentage(e.target.value);
  }

  async function checkPercetage(e: any) {
    e.target.type = "text";
    if (percentage > 100) {
      e.target.value = "0%";
      return limpResponse();
    }
    if (percentage < 1) {
      e.target.value = "0%";
      return limpResponse();
    }
    setPercentage(String(percentage) + "%");
  }

  async function getResponse() {
    let getValue = currency;
    if (typeof getValue == "string") {
      getValue = getValue.replace("R$", "");
      getValue = getValue.replaceAll(".", "");
      getValue = getValue.replaceAll(",", ".");
      getValue = parseFloat(getValue);
    }
    let getPercentage = percentage;
    if (typeof getPercentage == "string") {
      getPercentage = getPercentage.replace("%", "");
    }

    let getParcel = parcel;

    if (getParcel > 0 && getValue > 0 && getPercentage > 0) {
      axios
        .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
          amount: getValue,
          installments: parcel,
          mdr: getPercentage,
        })
        .then(function (response) {
          let first = response.data[1];
          let fifTeenth = response.data[15];
          let thirtieth = response.data[30];
          let ninetieth = response.data[90];
          setFirstDay(
            first.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );
          setFifTeenthDay(
            fifTeenth.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );
          setThirtiethDay(
            thirtieth.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );
          setNinetiethDay(
            ninetieth.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      limpResponse();
    }
  }

  return (
    <DivCard>
      <DivRequestComponent
        handleCurrency={handleCurrency}
        currency={currency}
        limpCurrency={limpCurrency}
        formatCurrency={formatCurrency}
        handleParcel={handleParcel}
        parcel={parcel}
        checkParcel={checkParcel}
        percentage={percentage}
        limpPercentage={limpPercentage}
        handlePercetage={handlePercetage}
        checkPercetage={checkPercetage}
        limpResponse={limpResponse}
      />
      <DivResponseComponent
        firstDay={firstDay}
        fifTeenthDay={fifTeenthDay}
        thirtiethDay={thirtiethDay}
        ninetiethDay={ninetiethDay}
      />
    </DivCard>
  );
}
