import { useState } from "react";
import FormField from "./FormField";
import { InputStatus } from "./FormField";
import ExpDateField from "./ExpDateField";

function CardForm() {
  const [nameInputText, setNameInputText] = useState<string>("");
  const [nameInputStatus, setNameInputStatus] = useState<InputStatus>(
    InputStatus.NORMAL
  );

  const [cardNumberInputText, setCardNumberInputText] = useState<string>("");
  const [cardNumberInputStatus, setCardNumberInputStatus] =
    useState<InputStatus>(InputStatus.NORMAL);

  const [cvcInputText, setCvcInputText] = useState<string>("");
  const [cvcInputStatus, setCvcInputStatus] = useState<InputStatus>(
    InputStatus.NORMAL
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
            contentText={nameInputText}
            invalidMessage="wrong format"
            textChangeHandler={(e: any) => {
              setNameInputText(e.target.value);
              if (e.target.value === "") {
                setNameInputStatus(InputStatus.ERROR);
              } else setNameInputStatus(InputStatus.FOCUSED);
            }}
            status={nameInputStatus}
            setStatus={setNameInputStatus}
          ></FormField>
          <FormField
            className="col-span-2"
            placeHolder="e.g. 1234 5678 9123 0000"
            labelText="card number"
            contentText={cardNumberInputText}
            invalidMessage="wrong format"
            textChangeHandler={(e: any) => {
              setCardNumberInputText(e.target.value);
              if (e.target.value === "") {
                setCardNumberInputStatus(InputStatus.ERROR);
              } else setCardNumberInputStatus(InputStatus.FOCUSED);
            }}
            status={cardNumberInputStatus}
            setStatus={setCardNumberInputStatus}
          ></FormField>

          <ExpDateField></ExpDateField>

          <FormField
            className="col-span-1"
            labelText="cvc"
            placeHolder="e.g. 123"
            contentText={cvcInputText}
            invalidMessage="Can't be blank"
            textChangeHandler={(e: any) => {
              setCvcInputText(e.target.value);
              if (e.target.value === "") {
                setCvcInputStatus(InputStatus.ERROR);
              } else setCvcInputStatus(InputStatus.FOCUSED);
            }}
            status={cvcInputStatus}
            setStatus={setCvcInputStatus}
          ></FormField>
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
