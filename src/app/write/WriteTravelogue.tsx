"use client";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/atom/Button";
import dynamic from "next/dynamic";
import React, { RefObject, useRef, useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";

interface RQProps {
  forwardedRef: RefObject<ReactQuill>;
  props: ReactQuillProps;
}
const modules: ReactQuill.QuillOptions = {};

const WrappedReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }: RQProps) => (
      <RQ
        theme="snow"
        ref={forwardedRef}
        modules={modules}
        style={{ width: 800, height: 630, background: "#f9f9f9" }}
        {...props}
      />
    );
  },
  {
    ssr: false,
  }
);

const WriteTravelogue = () => {
  const quillRef = useRef<ReactQuill | null>(null);

  return (
    <div>
      <WrappedReactQuill forwardedRef={quillRef} props={{}} />
    </div>
  );
};

export default WriteTravelogue;
