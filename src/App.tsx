import { useState } from 'react';
import './App.css'
import { Editor } from './MonacoEditor'
import ResultViewport from './ResultViewport'

function App() {

  const initialValue = ['<div class="div"></div>'
  , '<style>'
  ,'.div {'
  ,'    width: 100px;'
  ,'    height: 100px;'
  ,'    background: #dd6b4d;'
  ,'}'
  ,'</style>',''].join('\n');
  const [editorvalue, setEditorValue] = useState<string>(initialValue);
  const onEditorValueChanged= (value: string) => {
    setEditorValue(value);
    console.log(value);
  }

  return (
    <div className="App">
      <h1>CGI CSS Battleground</h1>
      <div className='container'>
        <Editor onDidChangeModelContent={onEditorValueChanged} initialValue={initialValue}/>
        <ResultViewport value={editorvalue}/>
      </div>
    </div>
  )
}

export default App
