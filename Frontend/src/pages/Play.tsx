import React, { useState } from "react";
import Header from "../components/header/Header";
import { Editor } from "../MonacoEditor";
import ResultViewport from "../ResultViewport";
import Footer from "../components/footer/Footer";
import HeaderHelper from "../components/header/HeaderHelper";
import { Button } from "../ui/button/Button";

interface Props extends SFC { }

const Play = ({ }: Props) => {
  const initialValue = [
    '<div class="div"></div>',
    "<style>",
    ".div {",
    "    width: 100px;",
    "    height: 100px;",
    "    background: #dd6b4d;",
    "}",
    "</style>",
    "",
  ].join("\n");
  const [editorvalue, setEditorValue] = useState<string>(initialValue);
  const onEditorValueChanged = (value: string) => {
    setEditorValue(value);
  };

  return (
    <div className="h-screen flex flex-1 flex-col w-screen font-mono dark:bg-dark-600 bg-light-600">
      <Header />
      <HeaderHelper />
      <div className="h-full flex-row flex w-full">
        <div className="flex flex-col flex-1">
          <Editor
            onDidChangeModelContent={onEditorValueChanged}
            initialValue={initialValue}
          />
          <div className="h-12 dark:bg-dark-600 bg-light-600 flex items-center px-10 w-full border-t dark:border-dark-400">
            <Button label="Submit" variant="primaryBlue" className="!px-14" />
          </div>
        </div>

        <ResultViewport value={editorvalue} />
      </div>
      <Footer />
    </div>
  );
};

export default Play;
