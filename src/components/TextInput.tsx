import React, { ChangeEvent, ForwardedRef, RefObject } from "react";

export enum TextInputState {
  NORMAL = "normal",
  FOCUSED = "focused",
  ERROR = "error",
}

export type TextInputProps = {
  placeHolder: string;
  value: string;
  state: TextInputState;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  maxLength?: number;
};

const TextInput = React.forwardRef(
  (
    {
      placeHolder,
      value,
      onChange,
      state,
      onFocus,
      onBlur,
      className,
      maxLength,
    }: TextInputProps,
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    const borderColorVariants = {
      normal: "bg-light-grayish-violet",
      focused: "bg-gradient-to-b from-gradient-blue to-gradient-violet",
      error: "bg-red",
    };

    return (
      <div
        className={
          "rounded-lg border border-none p-[1px] " +
          borderColorVariants[state] +
          " " +
          className
        }
      >
        <input
          className={
            "w-full min-w-0 cursor-pointer rounded-[7px] border-none py-[10px] pl-[15px] text-heading-large text-very-dark-violet ring-0 placeholder:text-light-grayish-violet focus:ring-0"
          }
          placeholder={placeHolder}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          ref={ref}
        />
      </div>
    );
  }
);

export default TextInput;
