import { useRef, useState, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

interface IEditorProps {
  onDidChangeModelContent: (value: string) => void;
  initialValue: string;
}

export const Editor: React.FC<IEditorProps> = (props) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  // useEffect(() => {
  //   if (monacoEl && !editor) {
  //     const newEditor = monaco.editor.create(monacoEl.current!, {
  //       value: props.initialValue,
  //       language: "html",
  //       theme: "vs-dark",
  //       automaticLayout: false,
  //       minimap: { enabled: false },
  //       contextmenu: false,
  //       fontSize: 14,
  //     });
  //     newEditor.onDidChangeModelContent(() => {
  //       props.onDidChangeModelContent(newEditor.getValue());
  //     });

  //     setEditor(newEditor);
  //   }
  //   return () => editor?.dispose();
  // }, [monacoEl.current]);

  useEffect(() => {
    if (monacoEl.current && !editor) {
      const newEditor = monaco.editor.create(monacoEl.current, {
        value: props.initialValue,
        language: "html",
        automaticLayout: true,
        minimap: { enabled: false },
        contextmenu: false,
        fontSize: 14,
        theme: "vs-dark",
        padding: { top: 20 },
      });

      newEditor.onDidChangeModelContent(() => {
        props.onDidChangeModelContent(newEditor.getValue());
      });

      setEditor(newEditor);

      return () => {
        if (newEditor) {
          newEditor.dispose();
        }
      };
    }
  }, []);

  return <div className="flex flex-1 h-full" ref={monacoEl} />;
};
