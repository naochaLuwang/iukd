"use client";
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Create a dynamic import of ReactQuill component
const DynamicReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: false,
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",

  "color",
  "background",
  "indent",
  "link",
  "image",
  "video",
  "align",
];

export function MyEditor({ onChange, content }: any) {
  return (
    <div className="w-full h-auto lg:-ml-4">
      {/* Render the dynamic ReactQuill component */}

      <DynamicReactQuill
        value={content}
        modules={modules}
        // formats={formats}
        readOnly={true}
        className="bg-white react-quill-container ql-container ql-editor"
      />
    </div>
  );
}

export default MyEditor;
