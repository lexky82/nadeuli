"use client";

import styled from "styled-components";

const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid black;
    margin: 0 10px;
  }

  span {
    white-space: nowrap;
  }
`;

export default Separator;
