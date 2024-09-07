"use client";

import styled from "styled-components";

const Input = styled.input<{ width?: number }>`
  width: ${(props) => props.width}px;
  height: 24px;
  padding: 10px 15px;
  background-color: #d9d9d9;
  border-radius: 15px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.gray};

  &:focus {
    background-color: #ffffff;
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
