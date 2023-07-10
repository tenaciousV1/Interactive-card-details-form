import { useState } from "react";
import FormField from "./FormField";
import TextInput, { TextInputState } from "./TextInput";
import { useFormStore } from "../store";

function CardForm() {
  const cardHolderName = useFormStore((state) => state.cardHolderName);
  const cardNumber = useFormStore((state) => state.cardNumber);

  const Cvc = useFormStore((state) => state.Cvc);

  const setCardHolderName = useFormStore((state) => state.setCardHolderName);
  const setCardNumber = useFormStore((state) => state.setCardNumber);
  const setCvc = useFormStore((state) => state.setCvc);

  const ExpirationMonth = useFormStore((state) => state.ExpirationMonth);
  const ExpirationYear = useFormStore((state) => state.ExpirationYear);

  const setExpirationMonth = useFormStore((state) => state.setExpirationMonth);
  const setExpirationYear = useFormStore((state) => state.setExpirationYear);

  const [nameInputStatus, setNameInputStatus] = useState<TextInputState>(
    TextInputState.NORMAL
  );

  const [cardNumberInputStatus, setCardNumberInputStatus] =
    useState<TextInputState>(TextInputState.NORMAL);

  const [cvcInputStatus, setCvcInputStatus] = useState<TextInputState>(
    TextInputState.NORMAL
  );

  const [monthState, setMonthState] = useState<TextInputState>(
    TextInputState.NORMAL
  );

  const [yearState, setyearState] = useState<TextInputState>(
    TextInputState.NORMAL
  );

  return (
    <>
      <form
        onInvalid={(e) => {
          e.preventDefault();
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mt-[91px] grid gap-7 px-6 xl:ml-[400px] xl:mt-0 xl:gap-10 xl:px-0"
      >
        <div className="grid items-start gap-x-[11px] gap-y-5 xl:gap-x-5 xl:gap-y-[26px]">
          <FormField
            className="col-span-2"
            placeHolder="e.g Jane Appleseed"
            labelText="cardholder name"
            value={cardHolderName}
            invalidMessage="wrong format"
            state={nameInputStatus}
            onChange={(e) => {
              setCardHolderName(e.target.value);
            }}
            onFocus={() => {
              setNameInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              if (nameInputStatus !== TextInputState.ERROR)
                setNameInputStatus(TextInputState.NORMAL);
            }}
          />

          <FormField
            className="col-span-2"
            placeHolder="e.g. 1234 5678 9123 0000"
            labelText="card number"
            value={cardNumber}
            invalidMessage="wrong format"
            state={cardNumberInputStatus}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            onFocus={() => {
              if (cardNumberInputStatus !== TextInputState.ERROR)
                setCardNumberInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              if (cardNumberInputStatus !== TextInputState.ERROR)
                setCardNumberInputStatus(TextInputState.NORMAL);
            }}
          />

          <div className="col-span-1 grid max-w-[152px] gap-x-2 gap-y-[9px] xl:max-w-[170px] xl:gap-x-[10px]">
            <p className="col-span-2 text-body-medium uppercase">
              exp. date (mm/yy)
            </p>

            <TextInput
              placeHolder="MM"
              value={ExpirationMonth}
              state={monthState}
              onChange={(e: { target: { value: string } }) => {
                setExpirationMonth(e.target.value);
              }}
              className="col-span-1 w-[72px]"
              onFocus={() => {
                setMonthState(TextInputState.FOCUSED);
              }}
              onBlur={() => {
                setMonthState(TextInputState.NORMAL);
              }}
            ></TextInput>

            <TextInput
              placeHolder="YY"
              value={ExpirationYear}
              state={yearState}
              onChange={(e: { target: { value: string } }) => {
                setExpirationYear(e.target.value);
              }}
              className="col-span-1 w-[72px]"
              onFocus={() => {
                setyearState(TextInputState.FOCUSED);
              }}
              onBlur={() => {
                setyearState(TextInputState.NORMAL);
              }}
            ></TextInput>
            {(monthState === TextInputState.ERROR ||
              yearState === TextInputState.ERROR) && (
              <span className="col-span-2 -mt-[1px] hidden text-body-small text-red">
                Cant be blank
              </span>
            )}
          </div>

          <FormField
            className="col-span-1"
            placeHolder="e.g. 123"
            labelText="cvc"
            value={Cvc}
            invalidMessage="wrong format"
            state={cvcInputStatus}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
            onFocus={() => {
              if (cvcInputStatus !== TextInputState.ERROR)
                setCvcInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              if (cvcInputStatus !== TextInputState.ERROR)
                setCvcInputStatus(TextInputState.NORMAL);
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-very-dark-violet py-[15px] text-heading-large text-white hover:bg-gradient-to-b hover:from-gradient-blue hover:to-gradient-violet"
        >
          Confirm
        </button>
      </form>
    </>
  );
}

export default CardForm;
