export enum InputStatus {
  NORMAL = "normal",
  FOCUSED = "focused",
  ERROR = "error",
}

export type FormFieldProps = {
  labelText: string;
  placeHolder: string;
  contentText: string;
  textChangeHandler: (e: any) => void;
  className?: string;
  invalidMessage?: string;
  status: InputStatus;
  setStatus: (e: any) => void;
};

function FormField({
  labelText,
  placeHolder,
  className,
  contentText,
  textChangeHandler,
  invalidMessage,
  status,
  setStatus,
}: FormFieldProps) {
  const borderColorVariants = {
    normal: "bg-light-grayish-violet",
    focused: "bg-gradient-to-b from-gradient-blue to-gradient-violet",
    error: "bg-red",
  };

  return (
    <div className={"grid gap-[9px] " + className}>
      <label className="text-body-medium uppercase text-very-dark-violet">
        {labelText}
      </label>
      <div
        className={
          "rounded-lg border border-none p-[1px] " + borderColorVariants[status]
        }
      >
        <input
          className={
            "w-full min-w-0 cursor-pointer rounded-[7px] border-none py-[10px] pl-[15px] text-heading-large text-very-dark-violet ring-0 placeholder:text-light-grayish-violet focus:ring-0"
          }
          placeholder={placeHolder}
          type="text"
          value={contentText}
          onChange={textChangeHandler}
          onFocus={() => {
            if (status !== InputStatus.ERROR) {
              setStatus(InputStatus.FOCUSED);
            }
          }}
          onBlur={() => {
            if (status !== InputStatus.ERROR) {
              setStatus(InputStatus.NORMAL);
            }
          }}
        />
      </div>
      {status === InputStatus.ERROR && (
        <span className="-mt-[1px] text-body-small text-red">
          {invalidMessage}
        </span>
      )}
    </div>
  );
}

export default FormField;
