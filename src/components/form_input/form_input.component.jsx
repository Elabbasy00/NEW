import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form.styles";
const FormInput = ({ onChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={onChange} {...otherProps} />

    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
