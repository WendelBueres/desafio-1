import axios from "axios";
import { useEffect, useState } from "react";
import { DivCard } from "../../styles/global";
import { DivRequestComponent } from "../DivRequest";
import { DivResponseComponent } from "../DivResponse";

export function DivBody() {
  const [currency, setCurrency] = useState<string | number>(0);
  const [parcel, setParcel] = useState(1);
  const [percentage, setPercentage] = useState<string | number>(0);
  const [keys, setKeys] = useState<string[]>();
  const [values, setValues] = useState<string[]>();
  const [days, setDays] = useState<string>();

  // useEffect: Se currency, parcel, percentage ou days sofrerem alteração a função GetResponse será executada
  useEffect(() => {
    getResponse();
  }, [currency, parcel, percentage, days]);

  // limpCurrency: limpa o input e passa condigurações de mínimo, máximo e tipo do input, posteriormente atualiza o valor do state currency
  function limpCurrency(e: any) {
    e.target.type = "number";
    e.target.min = 0;
    e.target.max = 100000000;
    e.target.value = "";
    return setCurrency(e.target.value);
  }

  // handleCurrency: atualiza o state com o valor atual do input
  function handleCurrency(e: any) {
    return setCurrency(e.target.value);
  }

  // formatCurrency: checa se valores do input valor são válidos, se não forem muda o valor do input para 0, se forem formata o valor do input para a moeda BRL(Real), por fim atualiza o valor do state currency
  function formatCurrency(e: any) {
    if (currency < 1000) {
      e.target.value = 0;
    }

    if (currency > 100000000) {
      e.target.value = 0;
    }

    e.target.type = "text";
    let valueCapture = parseFloat(e.target.value);
    let valueFormat = valueCapture.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setCurrency(valueFormat);
  }

  // handleParcel: atualiza o valor do state parcel
  function handleParcel(e: any) {
    return setParcel(e.target.value);
  }

  // checkParcel: verifica se o valor do input de parcela é válido, se não for atualiza o state parcel para 0
  function checkParcel(e: any) {
    if (parcel > 12) {
      setParcel(0);
    }
    if (parcel < 1) {
      setParcel(0);
    }
  }

  // limpPercentage: muda o tipo do input para number, passa configurações de mínimo e máximo, limpa o valor do input, por fim atualiza o state percentage
  function limpPercentage(e: any) {
    e.target.type = "number";
    e.target.min = 1;
    e.target.max = 100;
    e.target.value = "";
    return setPercentage(e.target.value);
  }

  // handlePercentage: atualiza o valor do state percentage com o valor do input
  function handlePercentage(e: any) {
    return setPercentage(e.target.value);
  }

  // checkPercentage: verifica se o valor passado no input porcentagem é válido, se não for atualiza o valor do input para 0, se for concatena o valor com % e atualiza o state percentage
  function checkPercentage(e: any) {
    e.target.type = "text";
    if (percentage > 100) {
      e.target.value = "0%";
    }
    if (percentage < 1) {
      e.target.value = "0%";
    }
    setPercentage(String(percentage) + "%");
  }

  // handleDays: atualiza o state days com o valor do input
  function handleDays(e: any) {
    return setDays(e.target.value);
  }

  // getResponse: formata os valores dos inputs para o formato correto da requisição, verifica se os inputs possuem valores válidos, se válidos envia a requisição, senão atualiza os valores dos states para default (keys: ["1", "15", "30", "90"]; values: ["R$ 0,00", "R$ 0,00", "R$ 0,00", "R$ 0,00"])
  function getResponse() {
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
      if (!days) {
        axios
          .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
            amount: getValue,
            installments: parcel,
            mdr: getPercentage,
          })
          .then(function (response) {
            setKeys(Object.keys(response.data));
            setValues(Object.values(response.data));
          })
          .catch(function (error) {
            console.error(error);
          });
      }
      if (days) {
        let daysValue = days.split(",");
        axios
          .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
            amount: getValue,
            installments: parcel,
            mdr: getPercentage,
            days: daysValue,
          })
          .then(function (response) {
            setKeys(Object.keys(response.data));
            setValues(Object.values(response.data));
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
    setKeys(["1", "15", "30", "90"]);
    setValues(["R$ 0,00", "R$ 0,00", "R$ 0,00", "R$ 0,00"]);
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
        handlePercentage={handlePercentage}
        checkPercentage={checkPercentage}
        handleDays={handleDays}
        days={days}
      />
      <DivResponseComponent keys={keys} values={values} />
    </DivCard>
  );
}
