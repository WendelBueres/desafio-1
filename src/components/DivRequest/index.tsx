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
  days?: string | undefined;
  limpPercentage: any;
  handlePercentage: any;
  checkPercentage: any;
  handleDays: any;
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
  handlePercentage,
  checkPercentage,
  handleDays,
  days,
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
        <p>Valor entre R$1.000,00 e R$100.000.000,00</p>

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
          onChange={handlePercentage}
          onBlur={checkPercentage}
        ></InputText>
        <p>Valor entre 1% e 100%</p>

        <Label htmlFor="days">Períodos para recebimento</Label>
        <InputText
          id="days"
          value={days}
          onChange={handleDays}
          placeholder={"Exemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"}
        ></InputText>
        <p>Inserir no máximo 10 campos, opcional</p>
      </Form>
    </DivRequest>
  );
}
