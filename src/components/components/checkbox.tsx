import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  dataSource: any;
};

const Checkbox = (props: Props) => {
  return (
    <div className="flex gap-3 items-center ">
      <input
        type="radio"
        name={props.name}
        className="radio radio-info "
        defaultChecked={
          props.dataSource && props.dataSource[props.name] === props.value
            ? true
            : false
        }
        value={props.value}
      />
      <span className="label-text">{props.label}</span>
    </div>
  );
};

export default Checkbox;
