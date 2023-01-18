import { DivRequest, Form, InputText, Label } from "../../styles/global";

interface InterfaceDivRequestComponent {
  handleCurrency: any;
  currency: string | number;
  limpCurrency: any;
  formatCurrency: any;
  handleParcel: any;
  parcel: number;
  checkParcel: any;
  percentage: string | number;
  limpPercentage: any;
  handlePercetage: any;
  checkPercetage: any;
  limpResponse: any;
}

export function DivRequestComponent({
  handleCurrency,
  currency,
  limpCurrency,
  formatCurrency,
  handleParcel,
  parcel,
  checkParcel,
  percentage,
  limpPercentage,
  handlePercetage,
  checkPercetage,
  limpResponse,
}: InterfaceDivRequestComponent) {
  return (
    <DivRequest>
      <Form>
        <h1>Simule sua antecipação</h1>
        <Label htmlFor="valor">Informe o valor da venda *</Label>
        <InputText
          id="valor"
          type="text"
          onChange={handleCurrency}
          value={currency}
          onClick={limpCurrency}
          onBlur={formatCurrency}
        ></InputText>
        <Label htmlFor="parcela">Em quantas parcelas *</Label>
        <InputText
          type={"number"}
          min={1}
          max={12}
          value={parcel}
          onChange={handleParcel}
          onBlur={checkParcel}
          id="parcela"
        ></InputText>
        <p>Máximo de 12 parcelas</p>
        <Label htmlFor="percentual">Informe o percentual de MDR * </Label>
        <InputText
          id="percentual"
          value={percentage}
          onClick={limpPercentage}
          onChange={handlePercetage}
          onBlur={checkPercetage}
        ></InputText>
      </Form>
    </DivRequest>
  );
}
