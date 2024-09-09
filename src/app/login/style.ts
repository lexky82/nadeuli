"use client";

import GlassBox from "@/components/atom/GlassBox";
import Heading from "@/components/atom/Heading";
import styled from "styled-components";

export const LoginHeading = styled(Heading)`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 45px;
`;

export const LoginFormGlassBox = styled(GlassBox)`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 520px;
  padding: 40px;
`;

export const LoginFormContainer = styled.div``;

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;
`;

export const LoginOptionsWrapper = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const FindLinkBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const AutoLoginCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
