import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #57282800;
  color: white;
  border: 1px solid #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  transition: all 0.1s ease-out;
  outline: none !important;
  &:hover {
    box-shadow: 8px 2px 20px 0px rgba(0, 0, 0, 0.75);
  }
  &:focus {
    box-shadow: 8px 2px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;
  &:hover {
    background-color: #357ae8;
    color: #fff;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogle) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  /* min-width: 165px; */
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  ${getButtonStyle}
`;
