import { ChangeEventHandler } from "react";

type Props = {
  type: string;
  playholder?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
};

const Input = (props: Props) => {
  return (
    <div
      className="relative mb-3"
      data-te-input-wrapper-init
      data-te-validate="input"
      data-te-validation-ruleset="isRequired"
    >
      <input
        type={props.type}
        className="peer block min-h-[auto] w-full min-w-[200px] rounded border-0 dark:bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  motion-reduce:transition-none dark:text-black  border-solid border-2 border-sky-500 "
        id="exampleFormControlInput33"
        placeholder={props.playholder}
        required={props.required}
        name={props.name}
        onChange={props.onChange}
        defaultValue={props.value}
        pattern={props.pattern}
        title={props.title}
      />
    </div>
  );
};

export default Input;
