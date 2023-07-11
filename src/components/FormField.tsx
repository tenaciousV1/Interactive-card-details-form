import TextInput from "./TextInput";
import { TextInputState } from "./TextInput";
import { TextInputProps } from "./TextInput";

export type FormFieldProps = TextInputProps & {
  labelText: string;
  className?: string;
  invalidMessage?: string;
};

function FormField({
  placeHolder,
  value,
  onChange,
  state,
  onFocus,
  onBlur,
  labelText,
  className,
  invalidMessage,
  maxLength,
}: FormFieldProps) {
  return (
    <div className={"grid gap-[9px] " + className}>
      <label className="text-body-medium uppercase text-very-dark-violet">
        {labelText}
      </label>

      <TextInput
        placeHolder={placeHolder}
        value={value}
        state={state}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
      ></TextInput>

      {state === TextInputState.ERROR && (
        <span className="-mt-[1px] text-body-small text-red">
          {invalidMessage}
        </span>
      )}
    </div>
  );
}

export default FormField;
