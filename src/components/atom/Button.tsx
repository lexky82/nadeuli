"use client";

import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  padding: 10px 17px;
  color: white !important;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  font-weight: 300;
  filter: brightness(1);

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Button;
