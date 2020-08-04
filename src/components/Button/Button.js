import React from "react";
import "./Button.scss";

const CN = "my-btn";
export const Button = props => {
  const {
    id,
    type = "button", // дефолтное значение = 'button'
    onClick,
    label = "Click me", // дефолтное значение = "Click me"
    className = "btn-primary",
    isDisabled = false
  } = props;

  const onClickHandler = e => {
    onClick && onClick(e); // такая конструкция нужна, чтоб, если onClick в пропсах не прийдет, тут не выпала ошибка
  };

  return (
    <button
      className={`${CN} btn add-margin ${className} ${isDisabled && 'disabled'}`}
      id={id}
      onClick={onClickHandler}
      type={type}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
