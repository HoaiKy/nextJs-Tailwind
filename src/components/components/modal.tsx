import React from "react";

type Props = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  onOk?: () => void;
  close?: boolean;
};

const Modal = (props: Props) => {
  return (
    <form action={props.onOk}>
      <div className="bg-white">
        <input type="checkbox" id={props.id} className="modal-toggle" />
        <div className="modal " role="dialog">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg flex justify-between">
              {props.title}
              <label htmlFor={props.id} className="cursor-pointer">
                x
              </label>
            </h3>
            {props.content}

            <div className="modal-action">
              {props.onOk && (
                <button type="submit">
                  <label htmlFor={props.id} className="cursor-pointer">
                    Save
                  </label>
                </button>
              )}
              {props.close && (
                <label htmlFor={props.id} className="cursor-pointer">
                  Cancel
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
