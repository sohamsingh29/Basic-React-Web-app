import React from "react";
import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const FormInput = ({
  name,
  label,
  onChange,
  onBlur,
  value,
  touched,
  errors,
  area = false,
  style,
}) => {
  const styleOb = {
    background: "#0002",
    outline: "none",
    border: "none",
    borderRadius: 5,
    fontSize: 14,
  };
  return (
    <Input style={style}>
      {area ? (
        <textarea
          style={{ ...style, height: 200, ...styleOb }}
          id={name}
          name={name}
          type="text"
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      ) : (
        <input
          style={{ ...styleOb, height: 50, ...style }}
          id={name}
          name={name}
          placeholder={label}
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
      {touched && errors ? (
        <div style={{ margin: 5, color: "red", fontSize: 14 }}>{errors}</div>
      ) : null}
    </Input>
  );
};

export default FormInput;
