import { useState } from "react";
import FormField from "./FormField";
import TextInput, { TextInputState } from "./TextInput";
import { useFormStore } from "../store";

function CardForm({ setIsCompleted }) {
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

  const [cardNumberInvalidMsg, setCardNumberInvalidMsg] =
    useState<string>("Can't be blank");

  const [ExpDateInvalidMsg, setExpDateInvalidMsg] =
    useState<string>("Can't be blank");

  const [CvcInvalidMsg, setCvcInvalidMsg] = useState<string>("Can't be blank");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (cardHolderName.length === 0)
            setNameInputStatus(TextInputState.ERROR);

          // dealing with errors on card number
          let isCardNumberError = true;
          if (cardNumber.length === 0)
            setCardNumberInvalidMsg("Can't be blank");
          else if (!cardNumber.match(/^(\d{4}\s)*\d{1,4}$/))
            setCardNumberInvalidMsg("Wrong format, numbers only");
          else if (cardNumber.length !== 19)
            setCardNumberInvalidMsg("must be 16 characters long");
          else isCardNumberError = false;

          if (isCardNumberError) setCardNumberInputStatus(TextInputState.ERROR);

          // dealing with errors on expiration date
          if (!ExpirationMonth.match(/\d{2}/))
            setMonthState(TextInputState.ERROR);

          if (!ExpirationYear.match(/\d{2}/))
            setyearState(TextInputState.ERROR);

          if (ExpirationMonth.length === 0 || ExpirationYear.length === 0) {
            setExpDateInvalidMsg("Can't be blank");
          } else if (!`${ExpirationMonth}${ExpirationYear}`.match(/\d{4}/)) {
            setExpDateInvalidMsg(
              "Wrong format, must be in format MM/YY, numbers only"
            );
          }

          // dealing with cvc errors
          let isCvcError = true;
          if (Cvc.length === 0) setCvcInvalidMsg("Can't be blank");
          else if (Cvc.match(/\d*\D+\d*/))
            setCvcInvalidMsg("Wrong format, numbers only");
          else if (Cvc.length !== 3)
            setCvcInvalidMsg("Must be three characters long");
          else isCvcError = false;

          if (isCvcError) setCvcInputStatus(TextInputState.ERROR);

          if (
            cardHolderName.length !== 0 &&
            !isCardNumberError &&
            !isCvcError &&
            `${ExpirationMonth}${ExpirationYear}`.match(/\d{4}/)
          )
            setIsCompleted(true);
        }}
        className="mt-[91px] grid gap-7 px-6 xl:ml-[400px] xl:mt-0 xl:gap-10 xl:px-0"
      >
        <div className="grid items-start gap-x-[11px] gap-y-5 xl:gap-x-5 xl:gap-y-[26px]">
          <FormField
            className="col-span-2"
            placeHolder="e.g Jane Appleseed"
            labelText="cardholder name"
            value={cardHolderName}
            invalidMessage="Can't be blank"
            state={nameInputStatus}
            onChange={(e) => {
              setCardHolderName(e.target.value);
            }}
            onFocus={() => {
              setNameInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              setNameInputStatus(TextInputState.NORMAL);
            }}
          />

          <FormField
            className="col-span-2"
            placeHolder="e.g. 1234 5678 9123 0000"
            labelText="card number"
            value={cardNumber}
            invalidMessage={cardNumberInvalidMsg}
            state={cardNumberInputStatus}
            onChange={(e) => {
              const newValue: string = e.target.value;
              if (
                newValue.length % 5 === 0 &&
                newValue.slice(-1) !== " " &&
                newValue.length > cardNumber.length
              )
                setCardNumber(
                  newValue.substring(0, newValue.length - 1) +
                    " " +
                    newValue.slice(-1)
                );
              else setCardNumber(newValue);
            }}
            onFocus={() => {
              setCardNumberInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              setCardNumberInputStatus(TextInputState.NORMAL);
            }}
            maxLength={19}
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
              maxLength={2}
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
              maxLength={2}
            ></TextInput>
            {(monthState === TextInputState.ERROR ||
              yearState === TextInputState.ERROR) && (
              <span className="col-span-2 -mt-[1px] text-body-small text-red">
                {ExpDateInvalidMsg}
              </span>
            )}
          </div>

          <FormField
            className="col-span-1"
            placeHolder="e.g. 123"
            labelText="cvc"
            value={Cvc}
            invalidMessage={CvcInvalidMsg}
            state={cvcInputStatus}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
            onFocus={() => {
              setCvcInputStatus(TextInputState.FOCUSED);
            }}
            onBlur={() => {
              setCvcInputStatus(TextInputState.NORMAL);
            }}
            maxLength={3}
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
