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
const modules = {
  toolbar: false,
};

const WrappedReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }: RQProps) => (
      <RQ theme="snow" ref={forwardedRef} modules={modules} style={{ height: 80 }} {...props} />
    );
  },
  {
    ssr: false,
  }
);

export default function QuillWrapper() {
  const quillRef = useRef<ReactQuill | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result as string;
      const quillEditor = quillRef.current?.getEditor();
      const range = quillEditor?.getSelection();

      if (range) {
        quillEditor?.insertEmbed(range.index, "image", base64Image);
      } else {
        quillEditor?.insertEmbed(0, "image", base64Image);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    console.log(quillRef.current?.value);
  };

  return (
    <div>
      <WrappedReactQuill forwardedRef={quillRef} props={{}} />

      <div style={{ display: "flex", marginTop: 10, justifyContent: "space-between" }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <Button onClick={handleClick} style={{ borderRadius: 20, width: 64 }}>
          작성
        </Button>
      </div>
    </div>
  );
}
