import { useState } from "react";
import { Editor } from "./MonacoEditor";
import ResultViewport from "./ResultViewport";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
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
    <div className="h-screen flex flex-1 flex-col w-screen font-mono">
      <Header />
      <div className="h-full flex-row flex w-full">
        <Editor
          onDidChangeModelContent={onEditorValueChanged}
          initialValue={initialValue}
        />
        <ResultViewport value={editorvalue} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
