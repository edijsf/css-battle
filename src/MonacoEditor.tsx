import {  useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './styles/MonacoEditor.module.css';

interface IEditorProps {
    onDidChangeModelContent: (value : string) => void,
    initialValue: string
}

export const Editor: React.FC<IEditorProps> = (props) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl && !editor) {
            const newEditor = monaco.editor.create(monacoEl.current!, {
                value: props.initialValue,
                language: 'html',
                automaticLayout: true,
                minimap: { enabled: false },
                contextmenu: false,
                fontSize: 14
            });
            newEditor.onDidChangeModelContent(()=>{
                console.log("aa");
                props.onDidChangeModelContent(newEditor.getValue())   
            });
            
			setEditor(newEditor);            
		}
		return () => editor?.dispose();
	}, [monacoEl.current]);

	return <div className={styles.editor} ref={monacoEl}></div>;
};