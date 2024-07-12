import { useRef, useState, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { useThemeContext } from "./contexts/ThemeWrapper";

interface IEditorProps {
  onDidChangeModelContent: (value: string) => void;
  initialValue: string;
}

export const Editor: React.FC<IEditorProps> = (props) => {
  const { isDark } = useThemeContext();

  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl.current && !editor) {
      const newEditor = monaco.editor.create(monacoEl.current, {
        value: props.initialValue,
        language: "html",
        automaticLayout: true,
        minimap: { enabled: false },
        contextmenu: false,
        fontSize: 14,
        theme: isDark ? "vs-dark" : "vs-light",
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

  useEffect(() => {
    if (editor) {
      monaco.editor.setTheme(isDark ? "vs-dark" : "vs-light");
    }
  }, [isDark, editor]);

  return <div className="flex flex-1 h-full" ref={monacoEl} />;
};

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
