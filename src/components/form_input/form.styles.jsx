import styled, { css } from "styled-components";

const subColor = "#FFF";
const mainColor = "#FFFFFF";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 25px 10px;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  input[type="file"]::before {
    content: "Hi";
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 99;
    /*This makes the button huge. If you want a bigger button, increase the font size*/
    font-size: 10px;
    /*Opacity settings for all browsers*/
    opacity: 1;
    -moz-opacity: 0;
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
  }
  input[type="file"]::-webkit-file-upload-button {
    display: none;
  }
  @media (max-width: 768px) {
    margin: 15px 10px;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: #ffffff00 !important;
  color: #fff;
  font-size: 18px;
  padding: 10px 10px 5px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
  margin: 0px;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
